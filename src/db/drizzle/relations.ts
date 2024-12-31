import { relations } from "drizzle-orm/relations";
import { document, education, experience, personalInfo, skills } from "./schema";

export const educationRelations = relations(education, ({one}) => ({
	document: one(document, {
		fields: [education.documentId],
		references: [document.id]
	}),
}));

export const documentRelations = relations(document, ({many}) => ({
	educations: many(education),
	experiences: many(experience),
	personalInfos: many(personalInfo),
	skills: many(skills),
}));

export const experienceRelations = relations(experience, ({one}) => ({
	document: one(document, {
		fields: [experience.documentId],
		references: [document.id]
	}),
}));

export const personalInfoRelations = relations(personalInfo, ({one}) => ({
	document: one(document, {
		fields: [personalInfo.documentId],
		references: [document.id]
	}),
}));

export const skillsRelations = relations(skills, ({one}) => ({
	document: one(document, {
		fields: [skills.documentId],
		references: [document.id]
	}),
}));