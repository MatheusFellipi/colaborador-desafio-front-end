import styled from "@emotion/styled";

type OverlayProps = {
  hide: boolean;
  handleHide: () => void;
};

export function Overlay({ hide, handleHide }: OverlayProps) {
  return <Overlay_Container hide={hide} onClick={handleHide} />;
}

type IsHideAllProps = {
  hide: boolean;
};

const Overlay_Container = styled.div<IsHideAllProps>`
  display: ${(props) => (props.hide ? "none" : "block")};
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
`;
