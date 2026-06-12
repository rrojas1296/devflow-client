export interface Job {
  id: string;
  title: string;
  company: JobCompany;
  stack: string[];
  location: string;
  modality: Modality;
  description: string;
  linkUrl: string;
  postedDate: string;
  source: JobSource;
  createdAt: string;
  updatedAt: string;
  externalId: string;
  deletedAt?: string | null;
  isDeleted: boolean;
}

export interface JobCompany {
  id: string;
  name: string;
  imageUrl: string;
}

export const JobModalityEnum = {
  REMOTE: "remote",
  ONSITE: "onsite",
  HYBRID: "hybrid",
} as const;

export const JobSourceEnum = {
  LINKEDIN: "linkedin",
  REMOTEOK: "remoteok",
  INDEED: "indeed",
  GETONBOARD: "getonboard",
};

export type JobSource = (typeof JobSourceEnum)[keyof typeof JobSourceEnum];

export type Modality = (typeof JobModalityEnum)[keyof typeof JobModalityEnum];
