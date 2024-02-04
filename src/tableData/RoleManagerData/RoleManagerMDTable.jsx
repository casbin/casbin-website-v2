import React from "react";
import CustomMarkdown from "@site/src/components/MarkdownToJsx/CustomMarkdown";

export default function RoleManagerMDTable({data}) {
  // 表头
  let markdown =
    "| Role manager | Author | Description |\n|---------|--------|---------|\n";

  // 遍历数据，为每一行添加Markdown格式
  data.forEach((item) => {
    markdown += `| ${item.title} | ${item.author} | ${item.description} |\n`;
  });

  return <CustomMarkdown>{markdown}</CustomMarkdown>;
}
