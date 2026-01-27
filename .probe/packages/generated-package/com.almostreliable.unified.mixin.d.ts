declare module "com.almostreliable.unified.mixin.neoforge.worldgen.OreConfigurationAccessor" {
import {$List, $List$$Type} from "java.util.List"
import {$OreConfiguration$TargetBlockState, $OreConfiguration$TargetBlockState$$Type} from "net.minecraft.world.level.levelgen.feature.configurations.OreConfiguration$TargetBlockState"

export interface $OreConfigurationAccessor$$Interface {

(arg0: $List<($OreConfiguration$TargetBlockState)>): void
}

export class $OreConfigurationAccessor implements $OreConfigurationAccessor$$Interface {
 "almostunified$setTargets"(arg0: $List$$Type<($OreConfiguration$TargetBlockState$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreConfigurationAccessor$$Type = ((arg0: $List<($OreConfiguration$TargetBlockState)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OreConfigurationAccessor$$Original = $OreConfigurationAccessor;}
declare module "com.almostreliable.unified.mixin.neoforge.ContextAwareReloadListenerAccessor" {
import {$ConditionalOps, $ConditionalOps$$Type} from "net.neoforged.neoforge.common.conditions.ConditionalOps"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"

export interface $ContextAwareReloadListenerAccessor$$Interface {

(): $ConditionalOps$$Type<($JsonElement$$Type)>
}

export class $ContextAwareReloadListenerAccessor implements $ContextAwareReloadListenerAccessor$$Interface {
 "au$makeConditionalOps"(): $ConditionalOps<($JsonElement)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContextAwareReloadListenerAccessor$$Type = (() => $ConditionalOps$$Type<($JsonElement$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContextAwareReloadListenerAccessor$$Original = $ContextAwareReloadListenerAccessor;}
