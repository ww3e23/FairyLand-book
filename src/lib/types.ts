/** 资料可信度状态 */
export type TrustStatus = "verified" | "pending" | "outdated" | "conflict";

/** 字段级资料状态 */
export type FieldStatus =
  | "verified"
  | "uncertain"
  | "unavailable"
  | "conflict";

export interface SourceRef {
  title: string;
  url: string;
  author?: string;
  publishedDate?: string;
  reliability?: 1 | 2 | 3 | 4 | 5;
}

/** 带来源说明的资料字段 */
export interface DataField<T = string> {
  value?: T;
  status: FieldStatus;
  /** 说明文字：不确定原因、待确认说明等 */
  note?: string;
  references?: SourceRef[];
}

export type EntityType =
  | "class"
  | "skill"
  | "pet"
  | "item"
  | "job"
  | "map"
  | "quest"
  | "guide";

export interface GameVersion {
  code: string;
  name: string;
  server: string;
  expansion: string;
  expansionDate: string;
}

export interface BaseEntity {
  id: string;
  slug: string;
  name: string;
  aliases?: string[];
  trustStatus: TrustStatus;
  applicableVersion: string;
  lastVerifiedAt?: string;
  indexedAt: string;
  sources: SourceRef[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface ClassEntity extends BaseEntity {
  branch: "warrior" | "traveler" | "cleric";
  tier: 0 | 1 | 2;
  parentClassId?: string;
  description: DataField;
  attributeGuide?: DataField;
  equipmentGuide?: DataField;
  petGuide?: DataField;
  levelingGuide?: DataField;
  relatedSkillIds?: string[];
  relatedGuideIds?: string[];
}

export interface SkillEntity extends BaseEntity {
  classId?: string;
  className?: string;
  skillType: DataField;
  learnLevel: DataField;
  learnConditions: DataField;
  effect: DataField;
  mpCost: DataField;
  attackRange: DataField;
  targetType: DataField;
  relatedItemIds?: string[];
  relatedPetIds?: string[];
  relatedGuideIds?: string[];
}

export interface GuideEntity extends BaseEntity {
  guideType: "newbie" | "returning" | "class" | "dungeon" | "system";
  summary: string;
  content: string;
  isFeatured?: boolean;
  linkedEntityIds?: { type: EntityType; id: string; label: string }[];
}

export interface UpdateEntry {
  id: string;
  entityType: EntityType;
  entityId: string;
  entityName: string;
  changeSummary: string;
  publishedAt: string;
}

export interface SearchResult {
  id: string;
  type: EntityType;
  name: string;
  slug: string;
  description: string;
  trustStatus: TrustStatus;
  updatedAt: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}
