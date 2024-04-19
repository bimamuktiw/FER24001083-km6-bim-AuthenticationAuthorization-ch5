import { Icon } from "@iconify/react";
import { conditionMenu } from "../../../helper/data";
import dayjs from "dayjs";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Card({ className, data }) {
  console.log(conditionMenu.filter((item) => item.id === data.condition));
  return (
    <Link to={`/detail/${data.id}`} className={className}>
      <div className="flex items-center gap-4">
        <img
          className="rounded-full w-[34px] aspect-square object-cover"
          src={data.user.img}
          alt={`avatar ${data.user.name}`}
        />
        <div>
          <p>{data.user.name}</p>
          <p className="text-sm text-gray-400">
            {dayjs(data.created_at).format("DD MMMM YYYY")}
          </p>
        </div>
      </div>
      <img
        className="w-full aspect-square object-cover my-3"
        src={data.img}
        alt={`card img ${data.title}`}
      />
      <div className="mb-3">
        <p>{data.title}</p>
        <p className="font-bold text-lg">RP {data.price.toLocaleString()}</p>
        <p>
          {conditionMenu.filter((item) => item.id === data.condition)[0]
            ?.title || "-"}
        </p>
      </div>
      <div className="flex gap-1 items-center">
        <Icon icon="iconoir:heart" width={20} height={20} />
        <p>{data.favourite_count}</p>
      </div>
    </Link>
  );
}

export default Card;
