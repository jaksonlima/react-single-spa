// @ts-ignore
import { Navigate } from "@dasa-mfe/util-ui-calender";
// @ts-ignore
import { useStore } from "@dasa-mfe/util-state-calender";

export default function Root(props) {
  const state = useStore((state) => state);
  return (
    <>
      <section>{props.name} is mounted!</section>

      <section>{JSON.stringify(state)}</section>

      <Navigate name="/room">room</Navigate>
    </>
  );
}
