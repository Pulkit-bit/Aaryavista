export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

export interface ServiceCardProps {
  service: Service;
  index: number;
}

export interface TeamMember {
  name: string;
  role: string;
}
