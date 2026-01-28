declare module "xfacthd.framedblocks.api.model.cache.QuadCacheKey" {
import {$CamoContent} from "xfacthd.framedblocks.api.camo.CamoContent"

export interface $QuadCacheKey$$Interface {
}

export class $QuadCacheKey implements $QuadCacheKey$$Interface {
 "ctCtx"(): any
 "camo"(): $CamoContent<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadCacheKey$$Type = ($QuadCacheKey);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuadCacheKey$$Original = $QuadCacheKey;}
declare module "xfacthd.framedblocks.api.model.wrapping.RegisterModelWrappersEvent" {
import {$Event} from "net.neoforged.bus.api.Event"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterModelWrappersEvent extends $Event implements $IModBusEvent$$Interface {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterModelWrappersEvent$$Type = ($RegisterModelWrappersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterModelWrappersEvent$$Original = $RegisterModelWrappersEvent;}
declare module "xfacthd.framedblocks.api.model.wrapping.statemerger.StateMerger" {
import {$UnaryOperator, $UnaryOperator$$Interface} from "java.util.function.UnaryOperator"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property, $Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $StateMerger$$Interface extends $UnaryOperator$$Interface<($BlockState)> {
}

export class $StateMerger implements $StateMerger$$Interface {
static readonly "PASSTHROUGH": $StateMerger
static readonly "IGNORE_ALL": $StateMerger

 "getHandledProperties"(arg0: $Holder$$Type<($Block)>): $Set<($Property<(never)>)>
 "apply"(arg0: any): any
 "apply"(arg0: $BlockState$$Type): $BlockState
static "ignoring"(arg0: $Set$$Type<($Property$$Type<(never)>)>): $StateMerger
static "identity"<T>(): $UnaryOperator<($BlockState)>
 "compose"<V>(arg0: $Function$$Type<(V), ($BlockState$$Type)>): $Function<(V), ($BlockState)>
 "andThen"<V>(arg0: $Function$$Type<($BlockState), (V)>): $Function<($BlockState), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateMerger$$Type = ($StateMerger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StateMerger$$Original = $StateMerger;}
