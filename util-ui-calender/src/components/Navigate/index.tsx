import { Button } from "@mui/material";
import { PropsWithChildren } from "react";
import { navigateToUrl } from "single-spa";

interface INavigate extends PropsWithChildren<{}> {
  name: string;
}

export function Navigate({ name, children }: INavigate) {
  function redirect(path: any): any {
    navigateToUrl(path.currentTarget.name);
  }

  return (
    <Button variant="contained" name={name} onClick={redirect}>
      {children}
    </Button>
  );
}
