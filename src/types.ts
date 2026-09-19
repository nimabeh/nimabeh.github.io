export interface BulletLink {
  text: string;
  url?: string;
  isExternal?: boolean;
}

export interface BulletPoint {
  id: string;
  text: string;
  formattedParts: Array<{
    text: string;
    isCode?: boolean;
    isBold?: boolean;
    link?: BulletLink;
  }>;
}

export interface SlideData {
  id: string;
  title?: string;
  categoryTag?: string;
  statement?: string;
  type: 'cover' | 'content' | 'contact';
  bullets?: BulletPoint[];
  closingNote?: string;
  contactEmail?: string;
}
