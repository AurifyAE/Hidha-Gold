import React from "react";
import { Box, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";

const NewsTicker = ({ newsItems = [] }) => {
  const items =
    newsItems.length > 0
      ? newsItems
      : [{ description: "Welcome to Zelora Gold Updates" }];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "38px",
          md: "2.8vw",
        },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backdropFilter: "blur(18px)",
        background:
          "linear-gradient(90deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 250, 240, 0.95) 50%, rgba(255, 255, 255, 0.92) 100%)",
        borderTop: "1.5px solid",
        borderImage:
          "linear-gradient(to right, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.85) 50%, rgba(212, 175, 55, 0.1) 100%) 1",
        boxShadow: "0 -4px 20px rgba(140, 100, 30, 0.12)",
      }}
    >
      {/* LEFT BRAND SECTION */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.6vw",
          pl: "2vw",
          pr: "1.5vw",
          height: "100%",
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            color: "#734D12", // Zelora Gold
            fontSize: {
              xs: "12px",
              md: "1.1vw",
            },
            fontWeight: 700,
            letterSpacing: "0.08em",
            whiteSpace: "nowrap",
          }}
        >
          Zelora Gold Updates
        </Typography>
        <Typography
          sx={{
            color: "rgba(180, 130, 40, 0.4)",
            fontSize: {
              xs: "14px",
              md: "1.2vw",
            },
            mx: "0.5vw",
            fontWeight: 300,
          }}
        >
          |
        </Typography>
      </Box>

      {/* NEWS TICKER */}
      <Box
        sx={{
          flex: 1,
          overflow: "hidden",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Marquee
          speed={40}
          gradient={false}
          autoFill={true}
          loop={0}
          direction="left"
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: "1.5vw",
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: "#1E293B",
                  fontSize: {
                    xs: "12px",
                    md: "1.15vw",
                  },
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  mx: "1.5vw",
                  lineHeight: "1",
                }}
              >
                {item?.description || ""}
              </Typography>
              <span
                style={{
                  color: "#B45309",
                  fontSize: "1.3vw",
                  opacity: 0.9,
                  marginRight: "1vw",
                }}
              >
                •
              </span>
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};

export default NewsTicker;
