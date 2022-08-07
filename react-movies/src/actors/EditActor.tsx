import { urlACtors } from "../endpoints";
import EditEntity from "../utils/EditEntity";
import { convertActorToFormData } from "../utils/formDataUtils";
import ActorForm from "./ActorForm";
import { actorCreationDTO, actorDTO } from "./actors.model";

export default function EditActor() {
  function transform(actor: actorDTO) {
    return {
      name: actor.name,
      pictureURL: actor.picture,
      biography: actor.biography,
      dateOfBirth: actor.dateOfBirth,
    };
  }

  return (
    <EditEntity<actorCreationDTO, actorDTO>
      url={urlACtors}
      indexURL="/actors"
      entityName="Actor"
      transformFormData={convertActorToFormData}
      transform={transform}
    >
      {(entity, edit) => (
        <ActorForm
          model={entity}
          onSubmit={async (values) => await edit(values)}
        ></ActorForm>
      )}
    </EditEntity>
  );
}
