import classNames from "classnames";
import { BsBoxSeamFill, BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import { Utils } from "../../utils/utils";
import { BasicWarehouseDto } from "../../common/types";

export interface WarehouseInfoRowProps {
  organizationId: string;
  warehouse: BasicWarehouseDto;
}
const access_token = localStorage.getItem("access_token");
console.log(access_token, "access_token");

function WarehouseInfoRow({
  warehouse,
  organizationId,
}: WarehouseInfoRowProps) {
  return (
    <Link
      className={classNames(
        "flex items-center justify-between border-b border-gray-200",
        "px-4 py-5 hover:bg-gray-150"
      )}
      to={Utils.dashboardUrl(organizationId, warehouse.id)}
    >
      <div className="flex items-center gap-6">
        <div className="text-xl text-secondary">
          <BsBoxSeamFill />
        </div>
        <h4>{warehouse.name}</h4>
      </div>
      <BsChevronRight />
    </Link>
  );
}
export default WarehouseInfoRow;
