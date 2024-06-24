import type { Struct, Schema } from '@strapi/strapi';

export interface ThemeColorThemeColor extends Struct.ComponentSchema {
  collectionName: 'components_theme_color_theme_colors';
  info: {
    displayName: 'themeColor';
    icon: 'chartCircle';
  };
  attributes: {
    themeColor: Schema.Attribute.JSON;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'code';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
    icon: 'code';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    workSummery: Schema.Attribute.RichText;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'education';
    icon: 'apps';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'theme-color\\theme-color': ThemeColorThemeColor;
      'skills\\skills': SkillsSkills;
      'experience\\experience': ExperienceExperience;
      'education\\education': EducationEducation;
    }
  }
}
