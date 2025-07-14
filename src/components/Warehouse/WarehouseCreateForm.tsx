import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { CurrentAppContext } from "../../context/CurrentAppContext";
import FieldTransformers from "../../utils/fieldTransformers";
import { Utils } from "../../utils/utils";
import Form from "../Form/Form";
import FormError from "../Form/FormError";
import FormField from "../Form/FormField";
import FormInput from "../Form/FormInput";
import FormSubmitButton from "../Form/FormSubmitButton";
import { ICreateWarehouseInOrgDto, WarehouseDto } from "../../common/types";

type Inputs = {
  name: string;
  address: string;
};

function WarehouseCreateForm() {
  const appContext = useContext(CurrentAppContext);
  const { register, handleSubmit } = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function onSubmit(inputs: Inputs) {
    setLoading(true);
    setError(null);

    const dto: ICreateWarehouseInOrgDto = {
      organizationId: appContext.organization.id,
      warehouse: inputs,
    };
    const access_token = localStorage.getItem("access_token");
    axios
      .post<WarehouseDto>(`/api/warehouses`, dto, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then(() => {
        queryClient.invalidateQueries([
          "organizations",
          appContext.organization.id,
        ]);
        toast.success("Successfully created warehouse");
        navigate("..");
      })
      .catch((err) => setError(Utils.requestErrorToString(err)))
      .finally(() => setLoading(false));
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
      <FormField label="Name" required>
        <FormInput
          placeholder="US West Main"
          required
          {...register("name", {
            required: true,
            setValueAs: FieldTransformers.string,
          })}
        />
      </FormField>

      <FormField label="Address">
        <FormInput
          placeholder="18 Milton Street"
          {...register("address", { setValueAs: FieldTransformers.string })}
        />
      </FormField>

      <FormError>{error}</FormError>
      <FormSubmitButton>Create warehouse</FormSubmitButton>
    </Form>
  );
}
export default WarehouseCreateForm;
