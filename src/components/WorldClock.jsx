import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const clockConfig = [
  {
    key: "uae",
    label: "UAE",
    timeZone: "Asia/Dubai",
    flag: "/images/uae.png",
  },

  {
    key: "london",
    label: "LONDON",
    timeZone: "Europe/London",
    flag: "/images/uk.png",
  },
  {
    key: "usa",
    label: "USA",
    timeZone: "America/New_York",
    flag: "/images/usa.png",
  },
];

const WorldClockHorizontal = () => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      const updatedTimes = {};

      clockConfig.forEach((clock) => {
        updatedTimes[clock.key] = now.toLocaleTimeString("en-US", {
          ...timeOptions,
          timeZone: clock.timeZone,
        });
      });

      setTimes(updatedTimes);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "1vw",
        width: "100%",
      }}
    >
      {clockConfig.map((clock) => (
        <Box
          key={clock.key}
          sx={{
            display: "flex",
            alignItems: "center",
            // width: "100%",
            gap: {
              xs: "10px",
              lg: "0.8vw",
            },
            padding: "0.4vw 1.2vw",
            borderRadius: "0.8vw",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 250, 240, 0.78) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.45)",
            boxShadow:
              "0 0.5vw 1.6vw rgba(140, 100, 30, 0.12), inset 0 1px 1px #FFFFFF",
            backdropFilter: "blur(16px)",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "30px",
                lg: "3vw",
              },
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={clock.flag}
              alt={clock.label}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "3px",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  lg: "1vw",
                },
                fontWeight: 700,
                color: "#734D12", // Luxury Bronze Gold
                letterSpacing: "0.08em",
              }}
            >
              {clock.label}
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  lg: "1.2vw",
                },
                color: "#18140E",
                fontWeight: 800,
                letterSpacing: "0.03em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {times[clock.key] || "--:--"}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default WorldClockHorizontal;
