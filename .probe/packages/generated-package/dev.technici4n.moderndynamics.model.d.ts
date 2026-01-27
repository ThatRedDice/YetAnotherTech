declare module "dev.technici4n.moderndynamics.model.AttachmentModelData" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$RenderedAttachment$$Type} from "dev.technici4n.moderndynamics.attachment.RenderedAttachment"
import {$Record} from "java.lang.Record"

export class $AttachmentModelData extends $Record {
constructor(modelId: StringJS, item: $Item$$Type)

public "modelId"(): StringJS
public "item"(): $Item
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "from"(arg0: $RenderedAttachment$$Type, arg1: $Item$$Type): $AttachmentModelData
public static "from"(arg0: $CompoundTag$$Type): $AttachmentModelData
public "write"(arg0: $CompoundTag$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentModelData$$Type = ({"item"?: $Item$$Type, "modelId"?: StringJS}) | ([item?: $Item$$Type, modelId?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachmentModelData$$Original = $AttachmentModelData;}
