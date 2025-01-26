import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Download, Share2, Trophy } from "lucide-react";

export default async function CertificateVerification({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // Mock data - replace with actual API call
  const certificateData = {
    isValid: true,
    holderName: "John Doe",
    certificateId: slug,
    issueDate: "2024-01-15",
    course: "Advanced Web Development",
    completionDate: "2024-01-10",
    verificationTimestamp: new Date().toLocaleString(),
    courseDuration: "6 months",
    achievements: ["Top Performer", "100% Attendance"],
  };

  return (
    <div className="min-h-screen place-content-center bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="space-y-4 border-b pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-gray-800">
                Certificate Verification
              </h2>
            </div>
            {certificateData.isValid ? (
              <Badge className="bg-green-100 hover:bg-green-100/90 text-green-800 px-4 py-2 text-sm">
                <CheckCircle className="w-5 h-5 mr-2" />
                Verified Certificate
              </Badge>
            ) : (
              <Badge variant="destructive" className="px-4 py-2 text-sm">
                <XCircle className="w-5 h-5 mr-2" />
                Invalid Certificate
              </Badge>
            )}
          </div>
          <p className="text-gray-500">
            Verified on: {certificateData.verificationTimestamp}
          </p>
        </CardHeader>

        <CardContent className="space-y-6 py-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Certificate Holder</p>
              <p className="font-medium">{certificateData.holderName}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Certificate ID</p>
              <p className="font-medium">{certificateData.certificateId}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Issue Date</p>
              <p className="font-medium">{certificateData.issueDate}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Course</p>
              <p className="font-medium">{certificateData.course}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Course Duration</p>
              <p className="font-medium">{certificateData.courseDuration}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Achievements</h3>
            <div className="flex flex-wrap gap-2">
              {certificateData.achievements.map((achievement, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1">
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t pt-6 flex justify-end space-x-4">
          <Button variant="outline" className="flex items-center">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button className="flex items-center">
            <Download className="w-4 h-4 mr-2" />
            Download Certificate
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
