declare module "appeng.me.helpers.IGridConnectedBlockEntity" {
import {$IGridNodeListener$State$$Type} from "appeng.api.networking.IGridNodeListener$State"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$IInWorldGridNodeHost$$Interface} from "appeng.api.networking.IInWorldGridNodeHost"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$AECableType} from "appeng.api.util.AECableType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IOwnerAwareBlockEntity$$Interface} from "appeng.block.IOwnerAwareBlockEntity"
import {$IManagedGridNode} from "appeng.api.networking.IManagedGridNode"
import {$BlockOrientation$$Type} from "appeng.api.orientation.BlockOrientation"
import {$IGrid$$Type} from "appeng.api.networking.IGrid"
import {$Set} from "java.util.Set"

export interface $IGridConnectedBlockEntity$$Interface extends $IActionHost$$Interface, $IOwnerAwareBlockEntity$$Interface, $IInWorldGridNodeHost$$Interface {
get "actionableNode"(): $IGridNode
get "gridNode"(): $IGridNode
get "mainNode"(): $IManagedGridNode
set "owner"(value: $Player$$Type)
}

export class $IGridConnectedBlockEntity implements $IGridConnectedBlockEntity$$Interface {
 "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$$Type): void
 "getActionableNode"(): $IGridNode
 "getGridNode"(arg0: $Direction$$Type): $IGridNode
 "getGridNode"(): $IGridNode
 "getMainNode"(): $IManagedGridNode
 "saveChanges"(): void
 "getGridConnectableSides"(arg0: $BlockOrientation$$Type): $Set<($Direction)>
 "ifGridPresent"(arg0: $Consumer$$Type<($IGrid)>): boolean
 "setOwner"(arg0: $Player$$Type): void
 "getCableConnectionType"(arg0: $Direction$$Type): $AECableType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridConnectedBlockEntity$$Type = ($IGridConnectedBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IGridConnectedBlockEntity$$Original = $IGridConnectedBlockEntity;}
