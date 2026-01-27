declare module "com.hrznstudio.titanium.tab.TitaniumTab" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Item} from "net.minecraft.world.item.Item"

export class $TitaniumTab {
constructor(arg0: $ResourceLocation$$Type)

public "getResourceLocation"(): $ResourceLocation
public "getTabList"(): $List<($Item)>
get "resourceLocation"(): $ResourceLocation
get "tabList"(): $List<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TitaniumTab$$Type = ($TitaniumTab);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TitaniumTab$$Original = $TitaniumTab;}
