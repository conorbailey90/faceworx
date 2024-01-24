import { createClient} from "@sanity/client";

const config = {
  projectId: 'u4q3kibf',
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
};

const client = createClient(config);

export default client;