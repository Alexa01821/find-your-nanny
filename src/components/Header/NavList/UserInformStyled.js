import styled from "styled-components";

const UserInformStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  .user-inform-svg {
    display: flex;
    align-items: center;
    gap: 14px;

    .svg {
      width: 40px;
      height: 40px;
      padding: 8px;
      border-radius: 10px;
      fill: var(--color-accent);
      background-color: var(--color-text-white);
    }

    .user-inform-name {
      font-weight: 500;
      font-size: 18px;
      line-height: 111%;
      letter-spacing: -0.01em;
      color: var(--color-text-white);
    }
  }
  .user-inform-btn {
    padding: 14px 39px;
    border: 1px solid rgba(251, 251, 251, 0.4);
    border-radius: 30px;
  }
`;

export default UserInformStyled;
