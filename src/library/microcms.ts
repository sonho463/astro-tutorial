//SDK利用準備
import { createClient, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  worksTitle: string;
  worksDesc: string;
};
export type WorkResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Work[];
};

//APIの呼び出し
export const getWorks = async (queries?: MicroCMSQueries) => {
  return await client.get<WorkResponse>({ endpoint: "works-main", queries });
};
export const getWorkDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Work>({
    endpoint: "works-main",
    contentId,
    queries,
  });
};
