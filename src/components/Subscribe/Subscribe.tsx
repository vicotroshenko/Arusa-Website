import { Stack, Typography } from "@mui/material";
import Container from "../Container/Container";

import "./Subscribe.css";
import React, { useState } from "react";

const subscribeBg =
  "https://github.com/vicotroshenko/arusa-website/blob/main/src/images/jpeg/fourth-bg.jpg?raw=true";



const Subscribe = () => {
  const [value, setValue] = useState<string>("");

	const checkEmail = () => {
		if(!value?.includes("@") || !value?.includes(".")){
			return false;
		}
		return true;
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.dir(value);
	}

	

  return (
    <Container bgColor="secondary">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        maxWidth="1440px"
        width="100%"
        padding="84px 0 71px 0"
      >
        <Stack
          direction="column"
          maxWidth="1325px"
          width="100%"
          minHeight="677px"
          justifyContent="center"
          alignItems="center"
          sx={{
            background: `center/cover no-repeat url(${subscribeBg})`,
          }}
        >
          <Stack
            direction="column"
            maxWidth="534px"
            width="100%"
            gap="48px"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h2" color="textP.light2" letterSpacing="-4px">
              Be part of our club for discount
            </Typography>
            <form className="subscribeForm" onSubmit={handleSubmit}>
              <input
                type="email"
                value={value}
								name="email"
                className="subscribeInput"
                placeholder="YOUR EMAIL"
                onChange={(event) => setValue(event.target.value)}
              />
              {checkEmail() && <button className="subscribeButton">Sent</button>}
            </form>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Subscribe;
