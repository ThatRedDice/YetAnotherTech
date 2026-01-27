declare module "appeng.items.contents.NetworkToolMenuHost" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$NetworkToolItem, $NetworkToolItem$$Type} from "appeng.items.tools.NetworkToolItem"
import {$InternalInventory} from "appeng.api.inventories.InternalInventory"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$ItemMenuHost} from "appeng.api.implementations.menuobjects.ItemMenuHost"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ItemMenuHostLocator$$Type} from "appeng.menu.locator.ItemMenuHostLocator"
import {$IInWorldGridNodeHost, $IInWorldGridNodeHost$$Type} from "appeng.api.networking.IInWorldGridNodeHost"

export class $NetworkToolMenuHost<T extends $NetworkToolItem> extends $ItemMenuHost<(T)> {
constructor(arg0: T, arg1: $Player$$Type, arg2: $ItemMenuHostLocator$$Type, arg3: $IInWorldGridNodeHost$$Type)

public "getGridHost"(): $IInWorldGridNodeHost
public "insert"(arg0: $Player$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
public "getInventory"(): $InternalInventory
get "gridHost"(): $IInWorldGridNodeHost
get "inventory"(): $InternalInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkToolMenuHost$$Type<T> = ($NetworkToolMenuHost<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkToolMenuHost$$Original<T> = $NetworkToolMenuHost<(T)>;}
