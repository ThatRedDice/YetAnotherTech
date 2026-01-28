declare module "com.ridanisaurus.emendatusenigmatica.tabs.EECreativeTab" {
import {$Collection} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab} from "net.minecraft.world.item.CreativeModeTab"
import {$Function$$Type} from "java.util.function.Function"
import {$List, $List$$Type} from "java.util.List"
import {$CreativeModeTab$Builder$$Type} from "net.minecraft.world.item.CreativeModeTab$Builder"
import {$CreativeModeTab$DisplayItemsGenerator} from "net.minecraft.world.item.CreativeModeTab$DisplayItemsGenerator"

export class $EECreativeTab extends $CreativeModeTab {
readonly "tabsAfter": $List<($ResourceLocation)>
readonly "tabsBefore": $List<($ResourceLocation)>
 "displayItemsGenerator": $CreativeModeTab$DisplayItemsGenerator
 "displayItems": $Collection<($ItemStack)>

constructor(arg0: $CreativeModeTab$Builder$$Type)
constructor(arg0: $CreativeModeTab$Builder$$Type, arg1: $Function$$Type<($EECreativeTab), ($List$$Type<($ItemStack$$Type)>)>)

public "getIconItem"(): $ItemStack
public "reload"(): void
get "iconItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EECreativeTab$$Type = ($EECreativeTab);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EECreativeTab$$Original = $EECreativeTab;}
