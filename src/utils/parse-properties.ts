import { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints';

export type Post = {
  id: string;
  title: string;
};

export const parseProperties = (database: QueryDatabaseResponse): Post[] =>
  database.results.map((row) => {
    const id = row.id;
    const titleCell = row.properties.Title.title;
    const title = titleCell?.[0].plain_text;
    return { id, title };
  });
