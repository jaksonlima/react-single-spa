import { PropsWithChildren, useState } from "react";
import {
  Grid,
  IconButton,
  Typography,
  GridProps,
  TypographyProps,
  Box,
  useTheme,
} from "@mui/material";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Divider from "@mui/material/Divider";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import RuleIcon from "@mui/icons-material/Rule";
import SummarizeIcon from "@mui/icons-material/Summarize";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

import { firstAndLastName, shortenName } from "../../utils/string";
import { getCookies } from "../../utils/cookies";
import { BRAND } from "../../utils/env";

interface IconTextProps extends PropsWithChildren<any> {
  Icon: any;
  text: string;
  GridProps?: GridProps;
  TypographyProps?: TypographyProps;
}

function IconText({
  Icon,
  text,
  GridProps,
  TypographyProps,
  children,
}: IconTextProps) {
  const theme = useTheme();

  return (
    <>
      <Grid
        item
        container
        alignItems="center"
        wrap="nowrap"
        gap={2}
        sx={{ cursor: "pointer" }}
        {...GridProps}
      >
        {children}
        <Grid item>
          <IconButton component="label">
            <Icon sx={{ color: theme.palette.grey["100"] }} fontSize="small" />
          </IconButton>
        </Grid>
        <Grid item overflow="hidden">
          <Typography
            sx={{ color: theme.palette.grey["200"] }}
            fontWeight="400"
            noWrap
            {...TypographyProps}
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

function Avatar() {
  // const { given_name, preferred_username } = useAppSelector(selectUserDetails);

  const formatterName = firstAndLastName("Jakson Lima");
  const formatterNameShortenName = shortenName("Jakson Lima").toUpperCase();
  const preferred_username = "f10506505901";

  return (
    <>
      <Grid
        item
        container
        alignItems="center"
        wrap="nowrap"
        gap={2}
        sx={{ cursor: "pointer" }}
      >
        <Grid item>
          <Box
            sx={{
              color: "white",
              border: (theme) => `1px solid ${theme.palette.grey["100"]}`,
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography component="strong" fontWeight="bold">
              {formatterNameShortenName}
            </Typography>
          </Box>
        </Grid>
        <Grid item overflow="hidden">
          <Typography
            sx={{
              color: (theme) => theme.palette.grey["50"],
            }}
            fontWeight="400"
            noWrap
          >
            {formatterName}
          </Typography>
          <Typography
            sx={{ color: (theme) => theme.palette.grey["300"] }}
            fontWeight="100"
            fontSize="small"
            noWrap
          >
            {preferred_username}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [openClink, setOpenClink] = useState(false);

  return (
    <Box sx={{ position: "relative", mr: "30px" }}>
      <Box sx={{ position: "absolute", right: "-29px", top: "55px" }}>
        <IconButton
          component="label"
          onClick={() => {
            setOpen(!open);
            setOpenClink(!openClink);
          }}
        >
          <KeyboardArrowRightIcon
            fontSize="large"
            color="primary"
            sx={{
              transform: `${open ? "rotate(181deg)" : "rotate(359deg)"}`,
              transition: "transform .2s linear",
            }}
          />
        </IconButton>
      </Box>
      <Box
        onMouseEnter={() => {
          if (!openClink) {
            setOpen(true);
          }
        }}
        onMouseLeave={() => {
          if (!openClink) {
            setOpen(false);
          }
        }}
      >
        <Grid
          container
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
          pl={1}
          pr={1}
          pt={3}
          pb={3}
          width={`${open ? "210px" : "50px"}`}
          height="100vh"
          sx={{
            transition: "width .2s linear",
            backgroundColor: ({ palette }) => palette.primary.main,
          }}
        >
          <Grid
            item
            container
            gap={2}
            flexDirection="column"
            alignItems="center"
          >
            <Grid item>
              <img alt="Dasa" src="/dasa-logo-1.svg" width={32} height={20} />
            </Grid>

            <IconText
              text="Carros"
              Icon={AssignmentIcon}
              GridProps={{ mt: 4 }}
            />

            <Divider
              sx={{ backgroundColor: (theme) => theme.palette.grey["500"] }}
              flexItem
            />

            <IconText text="Criar carro" Icon={EventNoteIcon} />
            <IconText text="Criar horário" Icon={MoreTimeIcon} />
            <IconText text="Criar calendário" Icon={InsertInvitationIcon} />
            <IconText text="Criar regras" Icon={RuleIcon} />

            <Divider
              sx={{ backgroundColor: (theme) => theme.palette.grey["500"] }}
              flexItem
            />

            <IconText text="Relatórios" Icon={SummarizeIcon} />
          </Grid>

          <Grid
            item
            container
            gap={2}
            flexDirection="column"
            alignItems="center"
          >
            <IconText
              text={(getCookies(BRAND) ?? "Selecionar").toUpperCase()}
              Icon={HomeWorkIcon}
              TypographyProps={{ fontWeight: "500" }}
            />

            <Divider
              sx={{ backgroundColor: (theme) => theme.palette.grey["500"] }}
              flexItem
            />

            <Avatar />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
