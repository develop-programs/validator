"use client";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import { Award, DownloadIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import moment from "moment";
import Image from "next/image";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";

interface CertificateInformationProps {
  recipientName: string;
  certificateId: string;
  issueDate?: string;
  issuedBy?: string;
}

export default function Certificate({
  recipientName = "John Doe",
}: Readonly<{ recipientName?: string }>) {
  const generateCertificateId = () => {
    const randomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    const dateStr = moment().format("DDMMYYYY");
    const uniqueHash = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `CERT-${dateStr}-${randomId}-${uniqueHash}`;
  };

  const [isGenerating, setIsGenerating] = useState(false);
  const [certificateId] = useState(generateCertificateId());
  const certificateRef = useRef<HTMLDivElement>(null);

  const generateAndDownloadPDF = async () => {
    if (!certificateRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 4,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const imgWidth = 297;
      const imgHeight = 210;

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      pdf.addImage(
        canvas.toDataURL("image/jpeg", 1.0),
        "JPEG",
        0,
        0,
        imgWidth,
        imgHeight
      );

      pdf.save(`certificate-${recipientName.replace(/\s+/g, "-")}.pdf`);
      toast.success("Certificate downloaded successfully");
    } catch (error) {
      toast.error("Error generating certificate");
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateAndDownloadImage = async () => {
    if (!certificateRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 4,
        backgroundColor: "#ffffff",
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png", 1.0);
      link.download = `certificate-${recipientName.replace(/\s+/g, "-")}.png`;
      link.click();

      toast.success("Certificate image downloaded successfully");
    } catch (error) {
      toast.error("Error generating certificate image");
      console.error("Error generating image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex items-center justify-center select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-4xl mx-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200"
          ref={certificateRef}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-video">
            <Image
              src="/cert-bg.png"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              alt="certificate background"
              priority
            />
            <CertificateInformation
              recipientName={recipientName}
              certificateId={certificateId}
              issueDate={new Date().toISOString()}
              issuedBy="Shreyansh Awadhiya"
              key={certificateId}
            />
          </div>
        </motion.div>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            variant="default"
            onClick={generateAndDownloadPDF}
            disabled={isGenerating}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg rounded-full transition-all duration-200 text-sm font-medium"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Certificate...
              </>
            ) : (
              <>
                <DownloadIcon className="w-4 h-4 mr-2" />
                Download PDF
              </>
            )}
          </Button>
          <Button
            variant="default"
            onClick={generateAndDownloadImage}
            disabled={isGenerating}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg rounded-full transition-all duration-200 text-sm font-medium"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Image...
              </>
            ) : (
              <>
                <DownloadIcon className="w-4 h-4 mr-2" />
                Download Image
              </>
            )}
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CertificateInformation({
  recipientName,
  certificateId,
  issueDate,
  issuedBy,
}: Readonly<CertificateInformationProps>) {
  const formattedDate = moment(issueDate).format("MMMM DD, YYYY");

  return (
    <div className="absolute inset-0 p-12">
      {/* Decorative Elements */}
      <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-100/80 to-purple-100/80 blur-xl" />
      <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-gradient-to-tl from-blue-100/80 to-indigo-100/80 blur-xl" />

      {/* Main Content */}
      <div className="relative h-full backdrop-blur-">
        <div className="flex flex-col justify-center h-[calc(100%-80px)] gap-8">
          {/* Header */}
          <div className="flex justify-between items-center mt-16">
            <div className="flex items-center gap-4">
              <Award className="size-8 text-indigo-600" />
              <svg className="w-96 h-8">
                <defs>
                  <linearGradient
                    id="titleGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="100%" stopColor="#9333EA" />
                  </linearGradient>
                </defs>
                <text
                  x="0"
                  y="24"
                  className="text-3xl font-bold"
                  fill="url(#titleGradient)"
                >
                  Certificate of Completion
                </text>
              </svg>
            </div>
            <div className="flex flex-col items-end bg-white/25 px-4 py-2 rounded-lg backdrop-blur-sm">
              <p className="text-sm font-medium text-gray-600">
                Certificate ID
              </p>
              <p className="font-mono text-sm font-semibold text-gray-900">
                {certificateId}
              </p>
            </div>
          </div>
          {/* Main Content Grid */}
          <div className="grid grid-cols-5 gap-12">
            <div className="col-span-3 space-y-4">
              {/* Recipient Name */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-indigo-600">
                  Proudly Presented To
                </p>
                <svg className="w-full h-12 mt-1">
                  <defs>
                    <linearGradient
                      id="nameGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#4F46E5" />{" "}
                      {/* indigo-600 */}
                      <stop offset="100%" stopColor="#9333EA" />{" "}
                      {/* purple-600 */}
                    </linearGradient>
                  </defs>
                  <text
                    x="0"
                    y="32"
                    className="text-4xl font-bold"
                    fill="url(#nameGradient)"
                  >
                    {recipientName}
                  </text>
                </svg>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                for demonstrating outstanding achievement and exceptional
                expertise in their field, meeting the highest standards of
                professional excellence.
              </p>

              {/* Date and Signature */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="bg-white/30 px-4 py-3 rounded-lg backdrop-blur-sm">
                  <p className="text-sm font-medium text-indigo-600">
                    Issue Date
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">
                    {formattedDate}
                  </p>
                </div>
                <div className="bg-white/30 px-4 py-3 rounded-lg backdrop-blur-sm">
                  <p className="text-sm font-medium text-indigo-600">
                    Issued By
                  </p>
                  <p className="mt-1 font-semibold text-gray-900">{issuedBy}</p>
                  <div className="mt-2 h-0.5 w-16 bg-gradient-to-r from-indigo-600 to-purple-600" />
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="col-span-2 flex flex-col items-center justify-center space-y-4 rounded-xl p-8 bg-white/20 backdrop-blur-sm border border-white/20 shadow-lg">
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <QRCodeSVG
                  value={`https://validator.com/certificate/${certificateId}`}
                  size={120}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-center text-sm font-medium text-gray-700">
                Scan to verify
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
