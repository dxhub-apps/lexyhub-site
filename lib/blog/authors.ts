import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Author } from './types';

const authorsDirectory = path.join(process.cwd(), 'content/authors');

export function getAuthorById(id: string): Author | null {
  try {
    const fullPath = path.join(authorsDirectory, `${id}.yml`);

    if (!fs.existsSync(fullPath)) {
      // Return default author if file doesn't exist
      return {
        id,
        name: 'LexiHub Team',
        avatar: '/blog/authors/default.png',
        bio: 'The LexiHub team is dedicated to helping e-commerce sellers succeed with AI-powered marketplace intelligence.',
      };
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = yaml.load(fileContents) as Omit<Author, 'id'>;

    return {
      id,
      ...data,
    };
  } catch (error) {
    console.error(`Error reading author ${id}:`, error);
    return null;
  }
}

export function getAllAuthors(): Author[] {
  if (!fs.existsSync(authorsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(authorsDirectory).filter((file) => file.endsWith('.yml'));

  return files
    .map((file) => getAuthorById(file.replace(/\.yml$/, '')))
    .filter((author): author is Author => author !== null);
}
