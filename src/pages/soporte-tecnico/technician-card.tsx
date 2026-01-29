import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { TechnicianCardProps } from "./support.types";


export function TechnicianCard({ technician }: TechnicianCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-white hover:shadow-xl transition-all duration-300 ease-out animate-fadeInUp py-0">
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {technician.name}
          </h3>
          {technician.company && (
            <p className="text-sm text-gray-600 font-medium">
              {technician.company}
            </p>
          )}
        </div>

        <div className="space-y-2.5 mb-5">
          <div className="flex items-start gap-2.5 text-sm">
            <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span className="text-gray-700">{technician.location}</span>
          </div>

          <div className="flex items-start gap-2.5 text-sm">
            <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <span className="text-gray-700">{technician.phone}</span>
          </div>

          <div className="flex items-start gap-2.5 text-sm">
            <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <a
              href={`mailto:${technician.email}`}
              className="text-dark-blue hover:underline break-all"
            >
              {technician.email}
            </a>
          </div>

          {technician.website && (
            <div className="flex items-start gap-2.5 text-sm">
              <Globe className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <a
                href={`https://${technician.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-blue hover:underline break-all"
              >
                {technician.website}
              </a>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <Button asChild className="flex-1" size="sm">
            <a href={`tel:${technician.phone.replace(/\s/g, "")}`}>
              <Phone className="h-4 w-4 mr-2" />
              Llamar
            </a>
          </Button>

          <Button asChild variant="outline" className="flex-1" size="sm">
            <a href={`mailto:${technician.email}`}>
              <Mail className="h-4 w-4 mr-2" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}
