import { createClient } from "contentful";

const useContenful = () => {
  const client = createClient(
    {
      space: "f9caxm6dx0gw",
      accessToken: "4K1PWpFlnq8ZiJbQohYG_uY10ZeWd8XuflrWusqH2Uk",
      host: "preview.contentful.com",
    },
    []
  );

  const getAnnouncement = async () => {
    try {
      const response = await client.getEntries({
        content_type: "announcement",
        select: "fields",
      });
      const announcement = response.items.map((item) => {
        return item.fields.announcement;
      });
      return announcement;
    } catch (error) {
      console.log(`Error getting announcements: ${error}`);
    }
  };

  const getClassTenStudents = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "classTen",
        select: "fields",
      });
      const classTenStudents = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields.file.url;
        return {
          ...item.fields,
          avatar,
        };
      });
      return classTenStudents;
    } catch (error) {
      console.log(`Error fetching students showcase: ${error}`);
    }
  };

  const getClassElevenStudents = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "classEleven",
        select: "fields",
      });
      const classElevenStudents = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields.file.url;
        return {
          ...item.fields,
          avatar,
        };
      });
      return classElevenStudents;
    } catch (error) {
      console.log(`Error fetching students showcase: ${error}`);
    }
  };

  const getYoutubeLink = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "youtubeVideo",
        select: "fields",
      });
      const links = entries.items.map((item) => {
        return item.fields;
      });
      return links;
    } catch (error) {
      console.log(`Error fetching Youtube link: ${error}`);
    }
  };

  return {
    getAnnouncement,
    getClassTenStudents,
    getClassElevenStudents,
    getYoutubeLink,
  };
};

export default useContenful;
