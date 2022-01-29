import React from "react";
import { Link } from "wouter";
import { INTERNAL_ROUTES } from "app/core/const/internal.routes";

function Item({ image, title, id }) {
  return (
    <li id={id}>
      <Link to={INTERNAL_ROUTES.GIF_DETAIL.path + "/" + id}>
        <img loading="lazy" src={image} alt={title} width="500" height="200" />
        <h4>{title}</h4>
      </Link>
    </li>
  );
}

export default React.memo(Item, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
