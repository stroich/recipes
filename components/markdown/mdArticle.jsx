// Created on 24.07.23 by 14:51:

import Markdown from "markdown-to-jsx";

export const MdArticle = ({content}) => {
  return (
    <div className="border border-red-500">
      <Markdown
        options={{
          overrides: {
            div: {
              component: "article",
            },
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  )
};

