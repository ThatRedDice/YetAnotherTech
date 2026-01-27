declare module "dev.uncandango.alltheleaks.mixin.core.main.accessor.BaseScreenAccessor" {
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"

export interface $BaseScreenAccessor$$Interface {

(arg0: $Screen): void
}

export class $BaseScreenAccessor implements $BaseScreenAccessor$$Interface {
 "atl$setPrevScreen"(arg0: $Screen$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseScreenAccessor$$Type = ((arg0: $Screen) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseScreenAccessor$$Original = $BaseScreenAccessor;}
declare module "dev.uncandango.alltheleaks.mixin.Trackable" {
import {$IdentityHashMap} from "java.util.IdentityHashMap"
import {$Map} from "java.util.Map"
import {$Hash$Strategy} from "it.unimi.dsi.fastutil.Hash$Strategy"
import {$ReentrantLock} from "java.util.concurrent.locks.ReentrantLock"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ObjectOpenCustomHashSet} from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import {$WeakReference} from "java.lang.ref.WeakReference"

export interface $Trackable$$Interface {

(): $Class$$Type<(never)>
public static get "summary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
}

export class $Trackable implements $Trackable$$Interface {
static readonly "LOCK": $ReentrantLock
static readonly "WEAK_REFERENCE_STRATEGY": $Hash$Strategy<($WeakReference<($Trackable)>)>
static readonly "TRACKABLE_MAP": $IdentityHashMap<($Class<(never)>), ($ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>)>

 "wrap"(): $WeakReference<($Trackable)>
 "atl$getBaseClass"(): $Class<(never)>
 "startTracking"(): void
static "startTracking"(arg0: any): void
static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
static "clearNullReferences"(): void
static "getSummary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trackable$$Type = (() => $Class$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Trackable$$Original = $Trackable;}
declare module "dev.uncandango.alltheleaks.mixin.core.main.accessor.PlayerAdvancementsAccessor" {
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $PlayerAdvancementsAccessor$$Interface {

(): $ServerPlayer$$Type
get "player"(): $ServerPlayer
}

export class $PlayerAdvancementsAccessor implements $PlayerAdvancementsAccessor$$Interface {
 "getPlayer"(): $ServerPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAdvancementsAccessor$$Type = (() => $ServerPlayer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAdvancementsAccessor$$Original = $PlayerAdvancementsAccessor;}
