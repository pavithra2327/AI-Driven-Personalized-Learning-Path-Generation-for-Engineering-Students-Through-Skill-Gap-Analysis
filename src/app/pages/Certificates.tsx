import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Award, Download, Share2, ExternalLink, CheckCircle, QrCode } from "lucide-react";
import { motion } from "motion/react";

const certificates = [
  { id: 1, title: 'React Advanced Patterns', issuer: 'AI Learning Platform', date: 'June 2026', verificationId: 'CERT-2026-001', status: 'verified' },
  { id: 2, title: 'Node.js Masterclass', issuer: 'AI Learning Platform', date: 'May 2026', verificationId: 'CERT-2026-002', status: 'verified' },
  { id: 3, title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', date: 'April 2026', verificationId: 'AWS-2026-123', status: 'verified' },
  { id: 4, title: 'JavaScript Fundamentals', issuer: 'AI Learning Platform', date: 'March 2026', verificationId: 'CERT-2026-003', status: 'verified' },
  { id: 5, title: 'MongoDB Essentials', issuer: 'AI Learning Platform', date: 'February 2026', verificationId: 'CERT-2026-004', status: 'verified' },
  { id: 6, title: 'Git & GitHub', issuer: 'AI Learning Platform', date: 'January 2026', verificationId: 'CERT-2026-005', status: 'verified' },
];

export function Certificates() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <CardContent className="p-8">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Your Certificates
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  Download, share, and showcase your achievements
                </p>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium">{certificates.length} Certificates Earned</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {certificates.length}
                </div>
                <p className="text-sm text-muted-foreground">Total Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-300">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                <CardTitle className="text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {certificate.title}
                </CardTitle>
                <CardDescription>
                  Issued by {certificate.issuer} • {certificate.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-accent/50 border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Verification ID</p>
                      <p className="font-mono text-sm font-semibold">{certificate.verificationId}</p>
                    </div>
                    <QrCode className="w-12 h-12 text-muted-foreground" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" size="sm" className="w-full gap-1">
                    <Download className="w-3 h-3" />
                    PDF
                  </Button>
                  <Button variant="outline" size="sm" className="w-full gap-1">
                    <Share2 className="w-3 h-3" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm" className="w-full gap-1">
                    <ExternalLink className="w-3 h-3" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle style={{ fontFamily: 'Poppins, sans-serif' }}>Share Your Achievements</CardTitle>
          <CardDescription>Let others know about your accomplishments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Add your certificates to LinkedIn, share on social media, or include in your portfolio
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Add to LinkedIn
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary gap-2">
                <Share2 className="w-4 h-4" />
                Share All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
