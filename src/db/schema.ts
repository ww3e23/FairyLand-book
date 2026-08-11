/**
 * Drizzle ORM Schema（预备接 Supabase PostgreSQL + Directus）
 * V1 资料暂存于 src/data/，后续 migrate 至此 schema
 */
import {
  pgTable,
  uuid,
  text,
  timestamp,
  boolean,
  jsonb,
  pgEnum,
  smallint,
  date,
} from "drizzle-orm/pg-core";

export const trustStatusEnum = pgEnum("trust_status", [
  "verified",
  "pending",
  "outdated",
  "conflict",
]);

export const entityTypeEnum = pgEnum("entity_type", [
  "class",
  "skill",
  "pet",
  "item",
  "job",
  "recipe",
  "material",
  "map",
  "monster",
  "quest",
  "guide",
]);

export const gameVersions = pgTable("game_versions", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: text("code").notNull().unique(),
  name: text("name").notNull(),
  server: text("server"),
  expansion: text("expansion"),
  expansionDate: date("expansion_date"),
  isCurrent: boolean("is_current").default(false),
  notes: text("notes"),
});

export const sources = pgTable("sources", {
  id: uuid("id").primaryKey().defaultRandom(),
  sourceType: text("source_type").notNull(),
  title: text("title").notNull(),
  author: text("author"),
  url: text("url"),
  publishedDate: date("published_date"),
  retrievedDate: date("retrieved_date").notNull(),
  reliability: smallint("reliability"),
  notes: text("notes"),
});

export const classes = pgTable("classes", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  branch: text("branch"),
  tier: smallint("tier"),
  parentClassId: uuid("parent_class_id"),
  data: jsonb("data").notNull(),
  trustStatus: trustStatusEnum("trust_status").default("pending"),
  applicableVersionId: uuid("applicable_version_id"),
  lastVerifiedAt: date("last_verified_at"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const skills = pgTable("skills", {
  id: uuid("id").primaryKey().defaultRandom(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  classId: uuid("class_id"),
  data: jsonb("data").notNull(),
  trustStatus: trustStatusEnum("trust_status").default("pending"),
  applicableVersionId: uuid("applicable_version_id"),
  lastVerifiedAt: date("last_verified_at"),
  metaTitle: text("meta_title"),
  metaDescription: text("meta_description"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const aliases = pgTable("aliases", {
  id: uuid("id").primaryKey().defaultRandom(),
  entityType: entityTypeEnum("entity_type").notNull(),
  entityId: uuid("entity_id").notNull(),
  alias: text("alias").notNull(),
  aliasType: text("alias_type").default("common"),
});

export const relationships = pgTable("relationships", {
  id: uuid("id").primaryKey().defaultRandom(),
  fromType: entityTypeEnum("from_type").notNull(),
  fromId: uuid("from_id").notNull(),
  toType: entityTypeEnum("to_type").notNull(),
  toId: uuid("to_id").notNull(),
  relationType: text("relation_type").notNull(),
  notes: text("notes"),
  trustStatus: trustStatusEnum("trust_status").default("pending"),
});

export const reports = pgTable("reports", {
  id: uuid("id").primaryKey().defaultRandom(),
  entityType: entityTypeEnum("entity_type"),
  entityId: uuid("entity_id"),
  reportType: text("report_type").notNull(),
  content: text("content").notNull(),
  sourceUrl: text("source_url"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const updates = pgTable("updates", {
  id: uuid("id").primaryKey().defaultRandom(),
  entityType: entityTypeEnum("entity_type").notNull(),
  entityId: uuid("entity_id").notNull(),
  changeSummary: text("change_summary").notNull(),
  publishedAt: timestamp("published_at").defaultNow(),
});
