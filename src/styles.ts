import styled from 'styled-components/native';

export const ItemToEdit = styled.View`
  border-top-left-radius: ${(props: any) => props.topLeft ? `${props.topLeft.toFixed(2)}px` : 0};
  border-top-right-radius: ${(props: any) => props.topRight ? `${props.topRight.toFixed(2)}px` : 0};
  border-bottom-left-radius: ${(props: any) => props.bottomLeft ? `${props.bottomLeft.toFixed(2)}px` : 0};
  border-bottom-right-radius: ${(props: any) => props.bottomRight ? `${props.bottomRight.toFixed(2)}px` : 0};

  width: ${(props: any) => props.width ? props.width : 50}px;
  height: ${(props: any) => props.height ? props.height : 50}px;

  border-width: 1px;
`;
