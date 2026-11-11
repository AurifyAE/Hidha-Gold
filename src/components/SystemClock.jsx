import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const SystemClock = () => {
  const [timeData, setTimeData] = useState({
    day: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const DAYS = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ];

      const dayStr = DAYS[now.getDay()];
      const MONTHS = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];

      const dateStr = `${String(now.getDate()).padStart(2, "0")} ${
        MONTHS[now.getMonth()]
      } ${now.getFullYear()}`;

      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTimeData({
        day: dayStr,
        date: dateStr,
        time: timeStr,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Glass Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1vw",
          width: "100%",
          padding: "0vw 2.5vw",
          borderRadius: "20px",
        }}
      >
        {/* Date */}
        <Typography
          sx={{
            fontSize: {
              xs: "14px",
              sm: "2.1vw",
            },
            fontWeight: 700,
            letterSpacing: "0.12em",
            background: "linear-gradient(180deg, #5C3A0A 0%, #382103 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter:
              "drop-shadow(0 1px 0 rgba(255, 255, 255, 0.85)) drop-shadow(0 2px 8px rgba(90, 50, 10, 0.2))",
            lineHeight: "1",
          }}
        >
          {timeData.date || "-- --- ----"}
        </Typography>
        {/* Day */}
        <Typography
          sx={{
            fontSize: {
              xs: "11px",
              sm: "0.95vw",
            },
            color: "#5C3E14",
            letterSpacing: "0.2em",
            fontWeight: 700,
            background: "rgba(255, 255, 255, 0.45)",
            border: "1px solid rgba(198, 146, 44, 0.35)",
            borderRadius: "0.4vw",
            px: "0.8vw",
            py: "0.25vw",
            boxShadow: "0 2px 8px rgba(100, 65, 15, 0.08)",
            lineHeight: "1",
          }}
        >
          {timeData.day || "-----"}
        </Typography>
      </Box>
    </Box>
  );
};

export default SystemClock;
