declare module "dev.engine_room.flywheel.backend.mixin.light.LayerLightSectionStorageAccessor" {
import {$DataLayer, $DataLayer$$Type} from "net.minecraft.world.level.chunk.DataLayer"

export interface $LayerLightSectionStorageAccessor$$Interface {

(arg0: long, arg1: boolean): $DataLayer$$Type
}

export class $LayerLightSectionStorageAccessor implements $LayerLightSectionStorageAccessor$$Interface {
 "flywheel$callGetDataLayer"(arg0: long, arg1: boolean): $DataLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerLightSectionStorageAccessor$$Type = ((arg0: long, arg1: boolean) => $DataLayer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayerLightSectionStorageAccessor$$Original = $LayerLightSectionStorageAccessor;}
declare module "dev.engine_room.flywheel.backend.mixin.AbstractClientPlayerAccessor" {
import {$PlayerInfo, $PlayerInfo$$Type} from "net.minecraft.client.multiplayer.PlayerInfo"

export interface $AbstractClientPlayerAccessor$$Interface {

(): $PlayerInfo$$Type
}

export class $AbstractClientPlayerAccessor implements $AbstractClientPlayerAccessor$$Interface {
 "flywheel$getPlayerInfo"(): $PlayerInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayerAccessor$$Type = (() => $PlayerInfo$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractClientPlayerAccessor$$Original = $AbstractClientPlayerAccessor;}
declare module "dev.engine_room.flywheel.backend.mixin.light.LightEngineAccessor" {
import {$DataLayerStorageMap} from "net.minecraft.world.level.lighting.DataLayerStorageMap"
import {$LayerLightSectionStorage, $LayerLightSectionStorage$$Type} from "net.minecraft.world.level.lighting.LayerLightSectionStorage"

export interface $LightEngineAccessor$$Interface<M extends $DataLayerStorageMap<(object)>, S extends $LayerLightSectionStorage<(object)>> {

(): S
}

export class $LightEngineAccessor<M extends $DataLayerStorageMap<(object)>, S extends $LayerLightSectionStorage<(object)>> implements $LightEngineAccessor$$Interface {
 "flywheel$storage"(): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightEngineAccessor$$Type<M, S> = (() => S);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightEngineAccessor$$Original<M, S> = $LightEngineAccessor<(M), (S)>;}
declare module "dev.engine_room.flywheel.backend.mixin.LevelRendererAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LevelRendererAccessor$$Interface {

(): integer
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "flywheel$getTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
