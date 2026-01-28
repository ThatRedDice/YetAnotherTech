declare module "appeng.me.cluster.IAEMultiBlock" {
import {$IAECluster} from "appeng.me.cluster.IAECluster"

export interface $IAEMultiBlock$$Interface<Cluster extends $IAECluster> {
get "cluster"(): Cluster
get "valid"(): boolean
}

export class $IAEMultiBlock<Cluster extends $IAECluster> implements $IAEMultiBlock$$Interface {
 "getCluster"(): Cluster
 "isValid"(): boolean
 "disconnect"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEMultiBlock$$Type<Cluster> = ($IAEMultiBlock<(Cluster)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAEMultiBlock$$Original<Cluster> = $IAEMultiBlock<(Cluster)>;}
declare module "appeng.me.cluster.IAECluster" {
import {$Iterator} from "java.util.Iterator"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IAECluster$$Interface {
get "blockEntities"(): $Iterator<($BlockEntity)>
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
get "destroyed"(): boolean
}

export class $IAECluster implements $IAECluster$$Interface {
 "getBlockEntities"(): $Iterator<($BlockEntity)>
 "getBoundsMax"(): $BlockPos
 "getBoundsMin"(): $BlockPos
 "updateStatus"(arg0: boolean): void
 "isDestroyed"(): boolean
 "destroy"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAECluster$$Type = ($IAECluster);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAECluster$$Original = $IAECluster;}
