"use client";
import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, DownloadIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import moment from "moment";
import Image from "next/image";

interface CertificateInformationProps {
  recipientName: string;
  certificateId: string;
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
  const [pdfPreviewUrl, setPdfPreviewUrl] = useState<string | null>(null);
  const [certificateId] = useState(generateCertificateId());
  const certificateRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (!certificateRef.current) return;

    setIsGenerating(true);
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        logging: false, // Added fixed height for consistency
      });

      const imgData = canvas.toDataURL("image/png", 2.0);
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [843, 595],
      });
      pdf.addImage(imgData, "PNG", 0, 0, 843, 595);

      const pdfBlob = pdf.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfPreviewUrl(pdfUrl);

      toast.success("Certificate generated successfully", {
        description: "You can now preview or download your certificate.",
      });
    } catch (error) {
      toast.error("Error generating certificate", {
        description: "Please try again later.",
      });
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadPDF = () => {
    if (pdfPreviewUrl) {
      const link = document.createElement("a");
      link.href = pdfPreviewUrl;
      link.download = "certificate.pdf";
      link.click();
    }
  };

  return (
    <div className="min-h-screen place-content-center">
      <div className="relative w-full max-w-4xl mx-auto select-none">
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden aspect-video"
          ref={certificateRef}
        >
          <div className="relative aspect-[16/9]">
            <Image
              src="/cert-bg.png"
              className="aspect-video object-cover"
              width={1920}
              height={1080}
              alt="certificate background"
            />
            <CertificateInformation
              recipientName={recipientName}
              certificateId={certificateId}
            />
          </div>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={generatePDF}
              disabled={isGenerating}
              aria-live="polite"
              className="absolute top-2 right-6 hover:bg-transparent [&_svg]:size-6"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                </>
              ) : (
                <>
                  <DownloadIcon />
                </>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-6xl">
            <DialogTitle>Certificate Preview</DialogTitle>
            {pdfPreviewUrl && (
              <div className="relative w-full aspect-video">
                <iframe
                  src={pdfPreviewUrl}
                  className="absolute inset-0 w-full h-full aspect-square"
                  title="Certificate Preview"
                  style={{ border: "none" }}
                />
              </div>
            )}
            <div className="flex justify-end gap-4 p-4">
              <DialogClose asChild>
                <Button>Close</Button>
              </DialogClose>
              <Button onClick={downloadPDF} className="min-w-[140px]">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function CertificateInformation({
  recipientName,
  certificateId,
}: Readonly<CertificateInformationProps>) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
        Certificate of Completion
      </h1>
      <p className="text-2xl text-gray-600 italic mb-10">This certifies that</p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
        {recipientName}
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-10">
        has successfully completed their professional development and
        demonstrated expertise in their field of study. This achievement
        represents their dedication to excellence and continuous learning.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-base">
        <div>
          <p className="font-medium text-gray-500">Certificate ID:</p>
          <p className="font-mono text-gray-800">{certificateId}</p>
        </div>
        <div>
          <p className="font-medium text-gray-500">Issue Date:</p>
          <p className="text-gray-800">
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div>
          <p className="font-medium text-gray-500">Issued By:</p>
          <p className="text-gray-800">Certificate Authority</p>
        </div>
      </div>
    </div>
  );
}
