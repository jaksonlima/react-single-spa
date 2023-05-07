// @ts-ignore
import { Navigate } from "@dasa-mfe/util-ui-calender";

export default function Root(props) {
  return (
    <>
      <section>{props.name} is mounted!</section>

      <Navigate name="/vehicle">vehicle</Navigate>
    </>
  );
}
