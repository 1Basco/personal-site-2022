import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./PostListStyles";

const PostList = (props) => (
  console.log(props),
  (
    <>
      <SectionTitle>Blog Posts</SectionTitle>
      <Boxes>
        {posts.data.map((post, index) => (
          <Box key={index}>
            <BoxNum>{`${post.title}`}</BoxNum>
            <BoxText>
              {
                //separate tags
                post.tags.map((tag) => `${tag}, `)
              }
            </BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </>
  )
);

export default PostList;
