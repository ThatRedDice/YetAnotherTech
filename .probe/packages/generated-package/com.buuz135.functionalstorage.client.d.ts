declare module "com.buuz135.functionalstorage.client.model.FramedDrawerModelData" {
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FramedDrawerModelData implements $INBTSerializable$$Interface<($CompoundTag)> {
static readonly "FRAMED_PROPERTY": $ModelProperty<($FramedDrawerModelData)>

constructor(arg0: $Map$$Type<(StringJS), ($Item$$Type)>)

public "getDesign"(): $Map<(StringJS), ($Item)>
public "getCode"(): StringJS
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
get "design"(): $Map<(StringJS), ($Item)>
get "code"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerModelData$$Type = ($FramedDrawerModelData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedDrawerModelData$$Original = $FramedDrawerModelData;}
