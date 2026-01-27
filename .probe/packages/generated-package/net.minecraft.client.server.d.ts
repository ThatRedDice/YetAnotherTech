declare module "net.minecraft.client.server.IntegratedServer" {
import {$LevelSettings} from "net.minecraft.world.level.LevelSettings"
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$UUID$$Type} from "java.util.UUID"
import {$MinecraftServer$ReloadableResources} from "net.minecraft.server.MinecraftServer$ReloadableResources"
import {$Trackable} from "dev.uncandango.alltheleaks.mixin.Trackable"
import {$RegionStorageInfo$$Type} from "net.minecraft.world.level.chunk.storage.RegionStorageInfo"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$Executor} from "java.util.concurrent.Executor"
import {$Class} from "java.lang.Class"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$ObjectOpenCustomHashSet} from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$SystemReport, $SystemReport$$Type} from "net.minecraft.SystemReport"
import {$Map} from "java.util.Map"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Thread$$Type} from "java.lang.Thread"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ChunkProgressListenerFactory, $ChunkProgressListenerFactory$$Type} from "net.minecraft.server.level.progress.ChunkProgressListenerFactory"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$Path} from "java.nio.file.Path"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Services$$Type} from "net.minecraft.server.Services"
import {$MinecraftServer} from "net.minecraft.server.MinecraftServer"

export class $IntegratedServer extends $MinecraftServer {
static readonly "VANILLA_BRAND": StringJS
readonly "progressListenerFactory": $ChunkProgressListenerFactory
readonly "executor": $Executor
static readonly "ANONYMOUS_PLAYER_PROFILE": $GameProfile
 "resources": $MinecraftServer$ReloadableResources
readonly "storageSource": $LevelStorageSource$LevelStorageAccess
static readonly "ABSOLUTE_MAX_WORLD_SIZE": integer
static readonly "DEMO_SETTINGS": $LevelSettings

constructor(arg0: $Thread$$Type, arg1: $Minecraft$$Type, arg2: $LevelStorageSource$LevelStorageAccess$$Type, arg3: $PackRepository$$Type, arg4: $WorldStem$$Type, arg5: $Services$$Type, arg6: $ChunkProgressListenerFactory$$Type)

public "getForcedGameType"(): $GameType
public "forceSynchronousWrites"(): boolean
public "tickServer"(arg0: $BooleanSupplier$$Type): void
public "isCommandBlockEnabled"(): boolean
public "isSingleplayerOwner"(arg0: $GameProfile$$Type): boolean
public "initServer"(): boolean
public "getModdedStatus"(): $ModCheck
public "getOperatorUserPermissionLevel"(): integer
public "getFunctionCompilationLevel"(): integer
public "shouldRconBroadcast"(): boolean
public "saveEverything"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "stop"(): void
public "getServerDirectory"(): $Path
public "onServerCrash"(arg0: $CrashReport$$Type): void
public "isTickTimeLoggingEnabled"(): boolean
public "fillServerSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public "getScaledTrackingDistance"(arg0: integer): integer
public "getRateLimitPacketsPerSecond"(): integer
public "isEpollEnabled"(): boolean
public "setDefaultGameType"(arg0: $GameType$$Type): void
public "publishServer"(arg0: $GameType$$Type, arg1: boolean, arg2: integer): boolean
public "reportChunkLoadFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "reportChunkSaveFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "getPort"(): integer
public "halt"(arg0: boolean): void
public "isDedicated"(): boolean
public "isPublished"(): boolean
public "isPaused"(): boolean
public "setUUID"(arg0: $UUID$$Type): void
public "shouldInformAdmins"(): boolean
public static "createMisplacedChunkReport"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type): $ReportedException
public static "startTracking"(arg0: any): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
public static "clearNullReferences"(): void
public static "getSummary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "forcedGameType"(): $GameType
get "commandBlockEnabled"(): boolean
get "moddedStatus"(): $ModCheck
get "operatorUserPermissionLevel"(): integer
get "functionCompilationLevel"(): integer
get "serverDirectory"(): $Path
get "tickTimeLoggingEnabled"(): boolean
get "rateLimitPacketsPerSecond"(): integer
get "epollEnabled"(): boolean
set "defaultGameType"(value: $GameType$$Type)
get "port"(): integer
get "dedicated"(): boolean
get "published"(): boolean
get "paused"(): boolean
set "UUID"(value: $UUID$$Type)
public static get "summary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegratedServer$$Type = ($IntegratedServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntegratedServer$$Original = $IntegratedServer;}
