import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";

const ResponsiveContainer = styled(Container)({
  marginTop: "200px",
});

export const About = () => {
  return (
    <ResponsiveContainer sx={{ overflow: "scroll" }}>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Typography variant="h2" fontFamily={"Dela Gothic One"}>
            メガネをかければ誰でもともだち
          </Typography>
          <Typography variant="h6" sx={{ mt: 4 }}>
            友達と連想するとあなたは何を思い浮かべますか？
            「気が合う人」や「付き合いの長い人」など
            多くの人は視覚的に見えないものを連想します。 kusomeganefriendsは
            【メガネをかければみんな友達】というコンセプトのもと、誕生しました。
            これにより、参加者は社会的地位に関わらず「友達」という同じ目線でコミュニティに参加する事が出来ます。
          </Typography>
          <Typography variant="h2" fontFamily={"Dela Gothic One"}>
            メガネをかければ誰でもともだち
          </Typography>
          <Typography variant="h6" sx={{ mt: 4 }}>
            友達と連想するとあなたは何を思い浮かべますか？
            「気が合う人」や「付き合いの長い人」など
            多くの人は視覚的に見えないものを連想します。 kusomeganefriendsは
            【メガネをかければみんな友達】というコンセプトのもと、誕生しました。
            これにより、参加者は社会的地位に関わらず「友達」という同じ目線でコミュニティに参加する事が出来ます。
          </Typography>
          <Typography variant="h6" sx={{ mt: 4 }}>
            友達と連想するとあなたは何を思い浮かべますか？
            「気が合う人」や「付き合いの長い人」など
            多くの人は視覚的に見えないものを連想します。 kusomeganefriendsは
            【メガネをかければみんな友達】というコンセプトのもと、誕生しました。
            これにより、参加者は社会的地位に関わらず「友達」という同じ目線でコミュニティに参加する事が出来ます。
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ position: "fixed", right: "100px" }}>
          <img
            width="auto"
            align="center"
            src="https://i.ibb.co/8mGn8Y7/rightimage.png"
          />
        </Grid>
      </Grid>
    </ResponsiveContainer>
  );
};

export default About;
