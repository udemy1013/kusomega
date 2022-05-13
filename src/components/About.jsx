import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { ArrowDownward, Send } from "@mui/icons-material";

const ResponsiveContainer = styled(Container)({
  marginTop: "300px",
});

const TypoBox = styled(Box)({
  margin: "200px 0",
});

const Discliption = styled(Typography)({
  fontSize: "18px",
});

export const About = () => {
  return (
    <ResponsiveContainer>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Typography variant="h2" fontFamily={"Dela Gothic One"}>
            メガネをかければ
            <br />
            誰でもともだち
          </Typography>

          <Discliption variant="h6" sx={{ mt: 4 }}>
            友達と連想するとあなたは何を思い浮かべますか？
            <br />
            「気が合う人」や「付き合いの長い人」など
            <br />
            多くの人は視覚的に見えないものを連想します。
            <br />
            <br />
            <br /> kusomeganefriendsは
            【メガネをかければみんな友達】というコンセプトのもと、誕生しました。
            これにより、参加者は社会的地位に関わらず「友達」という同じ目線でコミュニティに参加する事が出来ます。
            <br />
            <br />
            <Button
              sx={{ borderRadius: "20px" }}
              variant="contained"
              endIcon={<ArrowDownward />}
            >
              参加する
            </Button>
          </Discliption>

          <TypoBox>
            <Typography variant="h2" fontFamily={"Dela Gothic One"}>
              コミュニティ
            </Typography>

            <Discliption variant="h6" sx={{ mt: 4 }}>
              ここでわたし達はみんなと一緒にkusomeganefriendsの未来を作ります。
              あなたは自分のアイディアを披露し、
              コレクション作品をリクエストしたり、プロジェクトを企画する事ができます。
              わたし達と一緒にkusomeganefriendsの未来を作りましょう。
            </Discliption>
          </TypoBox>
          <TypoBox>
            <Typography variant="h2" fontFamily={"Dela Gothic One"}>
              ロードマップ
            </Typography>
            <Discliption variant="h6" sx={{ mt: 4 }}>
              1.コミュニティ形成　　　2022/4～
              わたし達の目的は「コミュニティにどれだけの価値をもたらすことができるのか」を中心に構築されています。
              はじめの第１歩として暗号通貨保有率４%と言われる日本人をメインターゲットに置き「ブロックチェーンとは」という初歩的な情報から配信しています。
              2.コミュニティプロジェクト　now
              保有者は自由にプロジェクトを立ち上げる事ができ、興味のあるプロジェクトに参加する事も可能です。
              「みんなで作るNFT」をテーマにわたし達はコミュニティのアイデアを実行していきます。
              3.コレクション保有者限定shop　coming soon
              保有者は商品企画に携わることができ、売上のロイヤリティ報酬を受ける事が可能になります。
              商品アイディアのプロジェクトルームも作成可能で、みんなとアイディアを出し合いながら商品開発に取り組むことができます。
              4？？？
            </Discliption>
          </TypoBox>
          <TypoBox>
            <Typography variant="h2" fontFamily={"Dela Gothic One"}>
              開発チーム
            </Typography>

            <Typography variant="h6" sx={{ mt: 4 }}>
              nftアイコン 名前・役職
            </Typography>
          </TypoBox>
          <TypoBox>
            <Typography variant="h2" fontFamily={"Dela Gothic One"}>
              よくある質問
            </Typography>
            <Discliption>
              ・NFTの買い方 ・コレクションの更新はいつ行われますか？ ・
            </Discliption>
          </TypoBox>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            position: "fixed",
            right: "0",
            bottom: "-5px",
          }}
        >
          <img
            src="https://i.ibb.co/tLT4Wnp/DDB21-BBF-02-C4-4236-982-C-601-D71-B1-F5-FE.png"
            width={"90%"}
          />
        </Grid>
      </Grid>
    </ResponsiveContainer>
  );
};

export default About;
