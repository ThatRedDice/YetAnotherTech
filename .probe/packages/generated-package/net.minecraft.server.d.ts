declare module "net.minecraft.server.ServerAdvancementManager" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$AdvancementTree} from "net.minecraft.advancements.AdvancementTree"
import {$AdvancementHolder} from "net.minecraft.advancements.AdvancementHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SimpleJsonResourceReloadListener} from "net.minecraft.server.packs.resources.SimpleJsonResourceReloadListener"

export class $ServerAdvancementManager extends $SimpleJsonResourceReloadListener {
constructor(arg0: $HolderLookup$Provider$$Type)

public "getAllAdvancements"(): $Collection<($AdvancementHolder)>
public "get"(arg0: $ResourceLocation$$Type): $AdvancementHolder
public "tree"(): $AdvancementTree
get "allAdvancements"(): $Collection<($AdvancementHolder)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerAdvancementManager$$Type = ($ServerAdvancementManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerAdvancementManager$$Original = $ServerAdvancementManager;}
declare module "net.minecraft.server.ServerFunctionLibrary" {
import {$Iterable} from "java.lang.Iterable"
import {$Map} from "java.util.Map"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$CommandFunction} from "net.minecraft.commands.functions.CommandFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$CommandDispatcher$$Type} from "com.mojang.brigadier.CommandDispatcher"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ServerFunctionLibrary implements $PreparableReloadListener$$Interface {
static readonly "TYPE_KEY": $ResourceKey<($Registry<($CommandFunction<($CommandSourceStack)>)>)>

constructor(arg0: integer, arg1: $CommandDispatcher$$Type<($CommandSourceStack$$Type)>)

public "getAvailableTags"(): $Iterable<($ResourceLocation)>
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getTag"(arg0: $ResourceLocation$$Type): $Collection<($CommandFunction<($CommandSourceStack)>)>
public "getFunction"(arg0: $ResourceLocation$$Type): $Optional<($CommandFunction<($CommandSourceStack)>)>
public "getFunctions"(): $Map<($ResourceLocation), ($CommandFunction<($CommandSourceStack)>)>
public "getName"(): StringJS
get "availableTags"(): $Iterable<($ResourceLocation)>
get "functions"(): $Map<($ResourceLocation), ($CommandFunction<($CommandSourceStack)>)>
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerFunctionLibrary$$Type = ($ServerFunctionLibrary);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerFunctionLibrary$$Original = $ServerFunctionLibrary;}
declare module "net.minecraft.server.Services" {
import {$GameProfileCache, $GameProfileCache$$Type} from "net.minecraft.server.players.GameProfileCache"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$YggdrasilAuthenticationService$$Type} from "com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService"
import {$ServicesKeySet, $ServicesKeySet$$Type} from "com.mojang.authlib.yggdrasil.ServicesKeySet"
import {$File$$Type} from "java.io.File"
import {$MinecraftSessionService, $MinecraftSessionService$$Type} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfileRepository, $GameProfileRepository$$Type} from "com.mojang.authlib.GameProfileRepository"
import {$Record} from "java.lang.Record"

export class $Services extends $Record {
constructor(arg0: $MinecraftSessionService$$Type, arg1: $ServicesKeySet$$Type, arg2: $GameProfileRepository$$Type, arg3: $GameProfileCache$$Type)

public "sessionService"(): $MinecraftSessionService
public "profileKeySignatureValidator"(): $SignatureValidator
public "profileRepository"(): $GameProfileRepository
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "create"(arg0: $YggdrasilAuthenticationService$$Type, arg1: $File$$Type): $Services
public "profileCache"(): $GameProfileCache
public "canValidateProfileKeys"(): boolean
public "servicesKeySet"(): $ServicesKeySet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Services$$Type = ({"sessionService"?: $MinecraftSessionService$$Type, "servicesKeySet"?: $ServicesKeySet$$Type, "profileCache"?: $GameProfileCache$$Type, "profileRepository"?: $GameProfileRepository$$Type}) | ([sessionService?: $MinecraftSessionService$$Type, servicesKeySet?: $ServicesKeySet$$Type, profileCache?: $GameProfileCache$$Type, profileRepository?: $GameProfileRepository$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Services$$Original = $Services;}
declare module "net.minecraft.server.ReloadableServerResources" {
import {$FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$TagManager} from "net.minecraft.tags.TagManager"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List} from "java.util.List"
import {$ServerScriptManager} from "dev.latvian.mods.kubejs.server.ServerScriptManager"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$ServerAdvancementManager} from "net.minecraft.server.ServerAdvancementManager"
import {$Commands} from "net.minecraft.commands.Commands"
import {$ReloadableServerResourcesKJS$$Interface} from "dev.latvian.mods.kubejs.core.ReloadableServerResourcesKJS"
import {$PreparableReloadListener} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$ReloadableServerRegistries$Holder} from "net.minecraft.server.ReloadableServerRegistries$Holder"
import {$HolderLookup$Provider} from "net.minecraft.core.HolderLookup$Provider"
import {$RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ICondition$IContext} from "net.neoforged.neoforge.common.conditions.ICondition$IContext"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ServerFunctionLibrary} from "net.minecraft.server.ServerFunctionLibrary"
import {$Commands$CommandSelection$$Type} from "net.minecraft.commands.Commands$CommandSelection"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ReloadableServerResources implements $ReloadableServerResourcesKJS$$Interface {
public "handler$cml000$cucumber$constructor"(arg0: $RegistryAccess$Frozen$$Type, arg1: $FeatureFlagSet$$Type, arg2: $Commands$CommandSelection$$Type, arg3: integer, arg4: $CallbackInfo$$Type): void
public "handler$cml000$cucumber$updateRegistryTags"(arg0: $CallbackInfo$$Type): void
public "kjs$getTagManager"(): $TagManager
public "kjs$getServerScriptManager"(): $ServerScriptManager
public "fullRegistries"(): $ReloadableServerRegistries$Holder
public "getRegistryLookup"(): $HolderLookup$Provider
public static "loadResources"(arg0: $ResourceManager$$Type, arg1: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg2: $FeatureFlagSet$$Type, arg3: $Commands$CommandSelection$$Type, arg4: integer, arg5: $Executor$$Type, arg6: $Executor$$Type): $CompletableFuture<($ReloadableServerResources)>
public "getFunctionLibrary"(): $ServerFunctionLibrary
public "updateRegistryTags"(): void
public "listeners"(): $List<($PreparableReloadListener)>
public "getAdvancements"(): $ServerAdvancementManager
public "getCommands"(): $Commands
public "getRecipeManager"(): $RecipeManager
public "getConditionContext"(): $ICondition$IContext
get "registryLookup"(): $HolderLookup$Provider
get "functionLibrary"(): $ServerFunctionLibrary
get "advancements"(): $ServerAdvancementManager
get "commands"(): $Commands
get "recipeManager"(): $RecipeManager
get "conditionContext"(): $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableServerResources$$Type = ($ReloadableServerResources);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadableServerResources$$Original = $ReloadableServerResources;}
declare module "net.minecraft.server.WorldLoader$PackConfig" {
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$PackRepository, $PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$CloseableResourceManager} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$WorldDataConfiguration, $WorldDataConfiguration$$Type} from "net.minecraft.world.level.WorldDataConfiguration"
import {$Record} from "java.lang.Record"

export class $WorldLoader$PackConfig extends $Record {
constructor(packRepository: $PackRepository$$Type, initialDataConfig: $WorldDataConfiguration$$Type, safeMode: boolean, initMode: boolean)

public "initialDataConfig"(): $WorldDataConfiguration
public "initMode"(): boolean
public "safeMode"(): boolean
public "createResourceManager"(): $Pair<($WorldDataConfiguration), ($CloseableResourceManager)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "packRepository"(): $PackRepository
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldLoader$PackConfig$$Type = ({"safeMode"?: boolean, "initialDataConfig"?: $WorldDataConfiguration$$Type, "packRepository"?: $PackRepository$$Type, "initMode"?: boolean}) | ([safeMode?: boolean, initialDataConfig?: $WorldDataConfiguration$$Type, packRepository?: $PackRepository$$Type, initMode?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldLoader$PackConfig$$Original = $WorldLoader$PackConfig;}
declare module "net.minecraft.server.ServerLinks$Entry" {
import {$URI, $URI$$Type} from "java.net.URI"
import {$ServerLinks$KnownLinkType, $ServerLinks$KnownLinkType$$Type} from "net.minecraft.server.ServerLinks$KnownLinkType"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $ServerLinks$Entry extends $Record {
constructor(arg0: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, arg1: $URI$$Type)

public "link"(): $URI
public "type"(): $Either<($ServerLinks$KnownLinkType), ($Component)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "displayName"(): $Component
public static "custom"(arg0: $Component$$Type, arg1: $URI$$Type): $ServerLinks$Entry
public static "knownType"(arg0: $ServerLinks$KnownLinkType$$Type, arg1: $URI$$Type): $ServerLinks$Entry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$Entry$$Type = ({"type"?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, "link"?: $URI$$Type}) | ([type?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, link?: $URI$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$Entry$$Original = $ServerLinks$Entry;}
declare module "net.minecraft.server.MinecraftServer$ServerResourcePackInfo" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $MinecraftServer$ServerResourcePackInfo extends $Record {
constructor(id: $UUID$$Type, url: StringJS, hash: StringJS, isRequired: boolean, prompt: $Component$$Type)

public "prompt"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "hash"(): StringJS
public "url"(): StringJS
public "id"(): $UUID
public "isRequired"(): boolean
get "required"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServer$ServerResourcePackInfo$$Type = ({"prompt"?: $Component$$Type, "isRequired"?: boolean, "url"?: StringJS, "hash"?: StringJS, "id"?: $UUID$$Type}) | ([prompt?: $Component$$Type, isRequired?: boolean, url?: StringJS, hash?: StringJS, id?: $UUID$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServer$ServerResourcePackInfo$$Original = $MinecraftServer$ServerResourcePackInfo;}
declare module "net.minecraft.server.WorldStem" {
import {$RegistryLayer, $RegistryLayer$$Type} from "net.minecraft.server.RegistryLayer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$LayeredRegistryAccess, $LayeredRegistryAccess$$Type} from "net.minecraft.core.LayeredRegistryAccess"
import {$WorldData, $WorldData$$Type} from "net.minecraft.world.level.storage.WorldData"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$CloseableResourceManager, $CloseableResourceManager$$Type} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$Record} from "java.lang.Record"

export class $WorldStem extends $Record implements $AutoCloseable$$Interface {
constructor(arg0: $CloseableResourceManager$$Type, arg1: $ReloadableServerResources$$Type, arg2: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, arg3: $WorldData$$Type)

public "dataPackResources"(): $ReloadableServerResources
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "close"(): void
public "resourceManager"(): $CloseableResourceManager
public "registries"(): $LayeredRegistryAccess<($RegistryLayer)>
public "worldData"(): $WorldData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldStem$$Type = ({"resourceManager"?: $CloseableResourceManager$$Type, "dataPackResources"?: $ReloadableServerResources$$Type, "registries"?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, "worldData"?: $WorldData$$Type}) | ([resourceManager?: $CloseableResourceManager$$Type, dataPackResources?: $ReloadableServerResources$$Type, registries?: $LayeredRegistryAccess$$Type<($RegistryLayer$$Type)>, worldData?: $WorldData$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldStem$$Original = $WorldStem;}
declare module "net.minecraft.server.ServerTickRateManager" {
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$TickRateManager} from "net.minecraft.world.TickRateManager"

export class $ServerTickRateManager extends $TickRateManager {
static readonly "MIN_TICKRATE": float

constructor(arg0: $MinecraftServer$$Type)

public "setTickRate"(arg0: float): void
public "setFrozen"(arg0: boolean): void
public "stepGameIfPaused"(arg0: integer): boolean
public "stopStepping"(): boolean
public "stopSprinting"(): boolean
public "requestGameToSprint"(arg0: integer): boolean
public "updateJoiningPlayer"(arg0: $ServerPlayer$$Type): void
public "checkShouldSprintThisTick"(): boolean
public "endTickWork"(): void
public "isSprinting"(): boolean
set "tickRate"(value: float)
set "frozen"(value: boolean)
get "sprinting"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerTickRateManager$$Type = ($ServerTickRateManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerTickRateManager$$Original = $ServerTickRateManager;}
declare module "net.minecraft.server.ServerLinks$UntrustedEntry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerLinks$KnownLinkType, $ServerLinks$KnownLinkType$$Type} from "net.minecraft.server.ServerLinks$KnownLinkType"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerLinks$UntrustedEntry extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerLinks$UntrustedEntry)>

constructor(arg0: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, arg1: StringJS)

public "link"(): StringJS
public "type"(): $Either<($ServerLinks$KnownLinkType), ($Component)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$UntrustedEntry$$Type = ({"type"?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, "link"?: StringJS}) | ([type?: $Either$$Type<($ServerLinks$KnownLinkType$$Type), ($Component$$Type)>, link?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$UntrustedEntry$$Original = $ServerLinks$UntrustedEntry;}
declare module "net.minecraft.server.TickTask" {
import {$Runnable$$Type, $Runnable$$Interface} from "java.lang.Runnable"

export class $TickTask implements $Runnable$$Interface {
constructor(arg0: integer, arg1: $Runnable$$Type)

public "getTick"(): integer
public "run"(): void
get "tick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickTask$$Type = ($TickTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickTask$$Original = $TickTask;}
declare module "net.minecraft.server.MinecraftServer" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$MinecraftServer$ReloadableResources} from "net.minecraft.server.MinecraftServer$ReloadableResources"
import {$CommandStorage} from "net.minecraft.world.level.storage.CommandStorage"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$Proxy, $Proxy$$Type} from "java.net.Proxy"
import {$ChunkIOErrorReporter$$Interface} from "net.minecraft.world.level.chunk.storage.ChunkIOErrorReporter"
import {$TextFilter} from "net.minecraft.server.network.TextFilter"
import {$ScheduledEvents$ScheduledEvent} from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import {$ProfileResults, $ProfileResults$$Type} from "net.minecraft.util.profiling.ProfileResults"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Difficulty$$Type} from "net.minecraft.world.Difficulty"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Thread, $Thread$$Type} from "java.lang.Thread"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$PlayerSelector$$Type} from "dev.latvian.mods.kubejs.core.PlayerSelector"
import {$LevelResource$$Type} from "net.minecraft.world.level.storage.LevelResource"
import {$ServerConnectionListener} from "net.minecraft.server.network.ServerConnectionListener"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$ChunkProgressListener$$Type} from "net.minecraft.server.level.progress.ChunkProgressListener"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$EntityArrayList} from "dev.latvian.mods.kubejs.player.EntityArrayList"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"
import {$LevelSettings} from "net.minecraft.world.level.LevelSettings"
import {$LayeredRegistryAccess} from "net.minecraft.core.LayeredRegistryAccess"
import {$RegionStorageInfo$$Type} from "net.minecraft.world.level.chunk.storage.RegionStorageInfo"
import {$StructureTemplateManager} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplateManager"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ServerScoreboard} from "net.minecraft.server.ServerScoreboard"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$Function$$Type} from "java.util.function.Function"
import {$Class} from "java.lang.Class"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$ObjectOpenCustomHashSet} from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CommandSource$$Interface} from "net.minecraft.commands.CommandSource"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$MinecraftServer$ServerResourcePackInfo} from "net.minecraft.server.MinecraftServer$ServerResourcePackInfo"
import {$MinecraftServerAccessor$$Interface} from "net.createmod.ponder.mixin.accessor.MinecraftServerAccessor"
import {$ServerInfo$$Interface} from "net.minecraft.server.ServerInfo"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$GameProfileRepository} from "com.mojang.authlib.GameProfileRepository"
import {$ScheduledEvents$Callback$$Type} from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import {$ServerStatus} from "net.minecraft.network.protocol.status.ServerStatus"
import {$ReportedException} from "net.minecraft.ReportedException"
import {$WorldData} from "net.minecraft.world.level.storage.WorldData"
import {$GameProfile, $GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Services$$Type} from "net.minecraft.server.Services"
import {$RuntimeException$$Type} from "java.lang.RuntimeException"
import {$PlayerList, $PlayerList$$Type} from "net.minecraft.server.players.PlayerList"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"
import {$ChatType$Bound$$Type} from "net.minecraft.network.chat.ChatType$Bound"
import {$Iterable} from "java.lang.Iterable"
import {$Optional} from "java.util.Optional"
import {$AdvancementNode} from "net.minecraft.advancements.AdvancementNode"
import {$ReloadableServerRegistries$Holder} from "net.minecraft.server.ReloadableServerRegistries$Holder"
import {$DataFixer, $DataFixer$$Type} from "com.mojang.datafixers.DataFixer"
import {$ProfilerFiller} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ServerFunctionManager} from "net.minecraft.server.ServerFunctionManager"
import {$Set} from "java.util.Set"
import {$TickDuration$$Type} from "dev.latvian.mods.kubejs.util.TickDuration"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$ServerLinks} from "net.minecraft.server.ServerLinks"
import {$ServerAdvancementManager} from "net.minecraft.server.ServerAdvancementManager"
import {$Commands} from "net.minecraft.commands.Commands"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$ChunkProgressListenerFactory, $ChunkProgressListenerFactory$$Type} from "net.minecraft.server.level.progress.ChunkProgressListenerFactory"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$GameRules} from "net.minecraft.world.level.GameRules"
import {$KeyPair} from "java.security.KeyPair"
import {$RegistryLayer} from "net.minecraft.server.RegistryLayer"
import {$Path, $Path$$Type} from "java.nio.file.Path"
import {$WorldDataConfiguration, $WorldDataConfiguration$$Type} from "net.minecraft.world.level.WorldDataConfiguration"
import {$ServerTickRateManager} from "net.minecraft.server.ServerTickRateManager"
import {$UUID$$Type} from "java.util.UUID"
import {$List} from "java.util.List"
import {$ServerPlayerGameMode} from "net.minecraft.server.level.ServerPlayerGameMode"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Trackable, $Trackable$$Interface} from "dev.uncandango.alltheleaks.mixin.Trackable"
import {$ScheduledEvents} from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ITimeTrackingServer$$Interface} from "org.embeddedt.modernfix.duck.ITimeTrackingServer"
import {$MinecraftServerKJS$$Interface} from "dev.latvian.mods.kubejs.core.MinecraftServerKJS"
import {$RemoteDebugSampleType$$Type} from "net.minecraft.util.debugchart.RemoteDebugSampleType"
import {$ChatDecorator} from "net.minecraft.network.chat.ChatDecorator"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RegistryAccess$Frozen} from "net.minecraft.core.RegistryAccess$Frozen"
import {$Executor} from "java.util.concurrent.Executor"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$GameType, $GameType$$Type} from "net.minecraft.world.level.GameType"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$AccessorMixinMinecraftServer$$Interface} from "noobanidus.mods.lootr.common.mixin.accessor.AccessorMixinMinecraftServer"
import {$SystemReport, $SystemReport$$Type} from "net.minecraft.SystemReport"
import {$TickTask, $TickTask$$Type} from "net.minecraft.server.TickTask"
import {$GameProfileCache} from "net.minecraft.server.players.GameProfileCache"
import {$Collection$$Type} from "java.util.Collection"
import {$PackRepository, $PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$AttachedData} from "dev.latvian.mods.kubejs.util.AttachedData"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$CustomBossEvents} from "net.minecraft.server.bossevents.CustomBossEvents"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $MinecraftServer extends $ReentrantBlockableEventLoop<($TickTask)> implements $ServerInfo$$Interface, $ChunkIOErrorReporter$$Interface, $CommandSource$$Interface, $AutoCloseable$$Interface, $ITimeTrackingServer$$Interface, $MinecraftServerKJS$$Interface, $Trackable$$Interface, $MinecraftServerAccessor$$Interface, $AccessorMixinMinecraftServer$$Interface {
static readonly "VANILLA_BRAND": StringJS
readonly "progressListenerFactory": $ChunkProgressListenerFactory
readonly "executor": $Executor
static readonly "ANONYMOUS_PLAYER_PROFILE": $GameProfile
 "resources": $MinecraftServer$ReloadableResources
readonly "storageSource": $LevelStorageSource$LevelStorageAccess
static readonly "ABSOLUTE_MAX_WORLD_SIZE": integer
static readonly "DEMO_SETTINGS": $LevelSettings

constructor(arg0: $Thread$$Type, arg1: $LevelStorageSource$LevelStorageAccess$$Type, arg2: $PackRepository$$Type, arg3: $WorldStem$$Type, arg4: $Proxy$$Type, arg5: $DataFixer$$Type, arg6: $Services$$Type, arg7: $ChunkProgressListenerFactory$$Type)

public "hasGui"(): boolean
public "getPlayerList"(): $PlayerList
public "getTickTime"(arg0: $ResourceKey$$Type<($Level)>): (long)[]
public "createTextFilterForPlayer"(arg0: $ServerPlayer$$Type): $TextFilter
public "createGameModeForPlayer"(arg0: $ServerPlayer$$Type): $ServerPlayerGameMode
public "getSpawnRadius"(arg0: $ServerLevel$$Type): integer
public "isPvpAllowed"(): boolean
public "getProfilePermissions"(arg0: $GameProfile$$Type): integer
public "getForcedGameType"(): $GameType
public "getDefaultGameType"(): $GameType
public "restoreInventories"(): $Map
public "getMaxChainedNeighborUpdates"(): integer
public "forceSynchronousWrites"(): boolean
public "getStructureManager"(): $StructureTemplateManager
public "getAbsoluteMaxWorldSize"(): integer
public "isSpawningAnimals"(): boolean
public "areNpcsEnabled"(): boolean
public "isUnderSpawnProtection"(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type): boolean
public "forceTimeSynchronization"(): void
public "tickServer"(arg0: $BooleanSupplier$$Type): void
public "isCommandBlockEnabled"(): boolean
public "getTickCount"(): integer
public "getProfileCache"(): $GameProfileCache
public "getChatDecorator"(): $ChatDecorator
public "getAllLevels"(): $Iterable<($ServerLevel)>
public "getCommandStorage"(): $CommandStorage
public "getServerResources"(): $MinecraftServer$ReloadableResources
public "getPlayerNames"(): (StringJS)[]
public "levelKeys"(): $Set<($ResourceKey<($Level)>)>
public "enforceSecureProfile"(): boolean
public "getPlayerIdleTimeout"(): integer
public "isSingleplayerOwner"(arg0: $GameProfile$$Type): boolean
public "isFlightAllowed"(): boolean
public "invalidateStatus"(): void
public "subscribeToDebugSample"(arg0: $ServerPlayer$$Type, arg1: $RemoteDebugSampleType$$Type): void
public "isResourcePackRequired"(): boolean
public "catnip$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
public "getWorldPath"(arg0: $LevelResource$$Type): $Path
public "getServerModName"(): StringJS
public "getModdedStatus"(): $ModCheck
public "handler$eeh000$ae2$injectSpatialLevel"(arg0: $ChunkProgressListener$$Type, arg1: $CallbackInfo$$Type): void
public "getOperatorUserPermissionLevel"(): integer
public "getFunctionCompilationLevel"(): integer
public "shouldRconBroadcast"(): boolean
public "saveAllChunks"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "saveEverything"(arg0: boolean, arg1: boolean, arg2: boolean): boolean
public "stop"(): void
public "getLocalIp"(): StringJS
public "setLocalIp"(arg0: StringJS): void
public "endMetricsRecordingTick"(): void
public "onServerExit"(): void
public "getServerDirectory"(): $Path
public "onServerCrash"(arg0: $CrashReport$$Type): void
public "isTickTimeLoggingEnabled"(): boolean
public static "throwIfFatalException"(): boolean
public static "setFatalException"(arg0: $RuntimeException$$Type): void
public "tickChildren"(arg0: $BooleanSupplier$$Type): void
public "getStatusJson"(): StringJS
public "getAverageTickTimeNanos"(): long
public "onTickRateChanged"(): void
public "getMaxPlayers"(): integer
public "hidesOnlinePlayers"(): boolean
public "addTickable"(arg0: $Runnable$$Type): void
public "getServerVersion"(): StringJS
public "getPlayerCount"(): integer
public "fillServerSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public "getSingleplayerProfile"(): $GameProfile
public "setSingleplayerProfile"(arg0: $GameProfile$$Type): void
public "getScaledTrackingDistance"(arg0: integer): integer
public "isSpawningMonsters"(): boolean
public "setDemo"(arg0: boolean): void
public "getServerResourcePack"(): $Optional<($MinecraftServer$ServerResourcePackInfo)>
public "getRateLimitPacketsPerSecond"(): integer
public "usesAuthentication"(): boolean
public "getPreventProxyConnections"(): boolean
public "setPreventProxyConnections"(arg0: boolean): void
public "isEpollEnabled"(): boolean
public "setPvpAllowed"(arg0: boolean): void
public "setFlightAllowed"(arg0: boolean): void
public "setMotd"(arg0: StringJS): void
public "setPlayerList"(arg0: $PlayerList$$Type): void
public "setDefaultGameType"(arg0: $GameType$$Type): void
public "publishServer"(arg0: $GameType$$Type, arg1: boolean, arg2: integer): boolean
public "getSpawnProtectionRadius"(): integer
public "repliesToStatus"(): boolean
public "setPlayerIdleTimeout"(arg0: integer): void
public "getSessionService"(): $MinecraftSessionService
public "getProfileRepository"(): $GameProfileRepository
public "getCompressionThreshold"(): integer
public "getNextTickTime"(): long
public "reloadResources"(arg0: $Collection$$Type<(StringJS)>): $CompletableFuture<(void)>
public static "configurePackRepository"(arg0: $PackRepository$$Type, arg1: $WorldDataConfiguration$$Type, arg2: boolean, arg3: boolean): $WorldDataConfiguration
public "kickUnlistedPlayers"(arg0: $CommandSourceStack$$Type): void
public "isEnforceWhitelist"(): boolean
public "getPackRepository"(): $PackRepository
public "setEnforceWhitelist"(arg0: boolean): void
public "getCurrentSmoothedTickTime"(): float
public "getTickTimesNanos"(): (long)[]
/**
 * 
 * @deprecated
 */
public "forgeGetWorldMap"(): $Map<($ResourceKey<($Level)>), ($ServerLevel)>
/**
 * 
 * @deprecated
 */
public "markWorldsDirty"(): void
public "dumpServerProperties"(arg0: $Path$$Type): void
public "isRecordingMetrics"(): boolean
public "stopRecordingMetrics"(): void
public "isCurrentlySaving"(): boolean
public "isTimeProfilerRunning"(): boolean
public "startTimeProfiler"(): void
public "stopTimeProfiler"(): $ProfileResults
public "logIPs"(): boolean
public "acceptsTransfers"(): boolean
public "reportChunkLoadFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "reportChunkSaveFailure"(arg0: $Throwable$$Type, arg1: $RegionStorageInfo$$Type, arg2: $ChunkPos$$Type): void
public "mfix$getLastTickStartTime"(): long
public "getOverworld"(): $ServerLevel
public "Lootr$getStorageSource"(): $LevelStorageSource$LevelStorageAccess
public "getConnection"(): $ServerConnectionListener
public "pollTask"(): boolean
public "getLevel"(arg0: $ResourceKey$$Type<($Level)>): $ServerLevel
public static "spin"<S extends $MinecraftServer>(arg0: $Function$$Type<($Thread), (S)>): S
public "close"(): void
public "getFile"(arg0: StringJS): $Path
public "getPort"(): integer
public "halt"(arg0: boolean): void
public "isShutdown"(): boolean
public "managedBlock"(arg0: $BooleanSupplier$$Type): void
public "isStopped"(): boolean
public "isRunning"(): boolean
public "getStatus"(): $ServerStatus
public "setPort"(arg0: integer): void
public "isDedicated"(): boolean
public "getProfiler"(): $ProfilerFiller
public "getFunctions"(): $ServerFunctionManager
public "getProxy"(): $Proxy
public "getResourceManager"(): $ResourceManager
public "logChatMessage"(arg0: $Component$$Type, arg1: $ChatType$Bound$$Type, arg2: StringJS): void
public "isPublished"(): boolean
public "isHardcore"(): boolean
public "fillSystemReport"(arg0: $SystemReport$$Type): $SystemReport
public "startRecordingMetrics"(arg0: $Consumer$$Type<($ProfileResults)>, arg1: $Consumer$$Type<($Path)>): void
public "finishRecordingMetrics"(): void
public "cancelRecordingMetrics"(): void
public "getWorldData"(): $WorldData
public "tickRateManager"(): $ServerTickRateManager
public "getAdvancements"(): $ServerAdvancementManager
public "registries"(): $LayeredRegistryAccess<($RegistryLayer)>
public "setUsesAuthentication"(arg0: boolean): void
public "isReady"(): boolean
public "isDemo"(): boolean
public "registryAccess"(): $RegistryAccess$Frozen
public "isSingleplayer"(): boolean
public "isPaused"(): boolean
public "getRunningThread"(): $Thread
public "getFixerUpper"(): $DataFixer
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "getScheduledEvents"(): $ScheduledEvents
public "scheduleExecutables"(): boolean
public "doRunTask"(arg0: $Runnable$$Type): void
public "doRunTask"(arg0: $TickTask$$Type): void
public "executeIfPossible"(arg0: $Runnable$$Type): void
public "waitForTasks"(): void
public "getCustomBossEvents"(): $CustomBossEvents
public "setDifficulty"(arg0: $Difficulty$$Type, arg1: boolean): void
public "setDifficultyLocked"(arg0: boolean): void
public "getWorldScreenshotFile"(): $Optional<($Path)>
public "getKeyPair"(): $KeyPair
public "atl$getBaseClass"(): $Class
public "getData"(): $AttachedData
public "getScoreboard"(): $ServerScoreboard
public "getGameRules"(): $GameRules
public "reloadableRegistries"(): $ReloadableServerRegistries$Holder
public "sendSystemMessage"(arg0: $Component$$Type): void
public "getCommands"(): $Commands
public "createCommandSourceStack"(): $CommandSourceStack
public "getPersistentData"(): $CompoundTag
public "isLevelEnabled"(arg0: $Level$$Type): boolean
public "acceptsSuccess"(): boolean
public "acceptsFailure"(): boolean
public "shouldInformAdmins"(): boolean
public "getRecipeManager"(): $RecipeManager
public "serverLinks"(): $ServerLinks
public "potionBrewing"(): $PotionBrewing
public "overworld"(): $ServerLevel
public "getMotd"(): StringJS
public static "createMisplacedChunkReport"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type): $ReportedException
public "reportMisplacedChunk"(arg0: $ChunkPos$$Type, arg1: $ChunkPos$$Type, arg2: $RegionStorageInfo$$Type): void
public "alwaysAccepts"(): boolean
public "getAdvancement"(id: $ResourceLocation$$Type): $AdvancementNode
public "getPlayer"(selector: $PlayerSelector$$Type): $ServerPlayer
public "self"(): $MinecraftServer
public "tell"(message: $Component$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "runCommand"(command: StringJS): void
public "runCommandSilent"(command: StringJS): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "getName"(): $Component
public "sendData"(channel: StringJS, data: $CompoundTag$$Type): void
public "getLevel"(dimension: $ResourceLocation$$Type): $ServerLevel
public "getMcEntities"(): $Iterable<($Entity)>
public "getEntityByUUID"(id: $UUID$$Type): $Entity
public "getEntityByNetworkID"(id: integer): $Entity
public "getMcPlayers"(): $List<($Player)>
public "getPlayers"(): $EntityArrayList
public "wrap"(): $WeakReference<($Trackable)>
public "startTracking"(): void
public static "startTracking"(arg0: any): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
public static "clearNullReferences"(): void
public static "getSummary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
public "sendData"(channel: StringJS): void
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "getEntitiesWithin"(aabb: $AABB$$Type): $EntityArrayList
public "getEntities"(): $EntityArrayList
public "getDisplayName"(): $Component
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "playerList"(): $PlayerList
get "pvpAllowed"(): boolean
get "forcedGameType"(): $GameType
get "defaultGameType"(): $GameType
get "maxChainedNeighborUpdates"(): integer
get "structureManager"(): $StructureTemplateManager
get "absoluteMaxWorldSize"(): integer
get "spawningAnimals"(): boolean
get "commandBlockEnabled"(): boolean
get "tickCount"(): integer
get "profileCache"(): $GameProfileCache
get "chatDecorator"(): $ChatDecorator
get "allLevels"(): $Iterable<($ServerLevel)>
get "commandStorage"(): $CommandStorage
get "serverResources"(): $MinecraftServer$ReloadableResources
get "playerNames"(): (StringJS)[]
get "playerIdleTimeout"(): integer
get "flightAllowed"(): boolean
get "resourcePackRequired"(): boolean
get "serverModName"(): StringJS
get "moddedStatus"(): $ModCheck
get "operatorUserPermissionLevel"(): integer
get "functionCompilationLevel"(): integer
get "localIp"(): StringJS
set "localIp"(value: StringJS)
get "serverDirectory"(): $Path
get "tickTimeLoggingEnabled"(): boolean
public static set "fatalException"(value: $RuntimeException$$Type)
get "statusJson"(): StringJS
get "averageTickTimeNanos"(): long
get "maxPlayers"(): integer
get "serverVersion"(): StringJS
get "playerCount"(): integer
get "singleplayerProfile"(): $GameProfile
set "singleplayerProfile"(value: $GameProfile$$Type)
get "spawningMonsters"(): boolean
set "demo"(value: boolean)
get "serverResourcePack"(): $Optional<($MinecraftServer$ServerResourcePackInfo)>
get "rateLimitPacketsPerSecond"(): integer
get "preventProxyConnections"(): boolean
set "preventProxyConnections"(value: boolean)
get "epollEnabled"(): boolean
set "pvpAllowed"(value: boolean)
set "flightAllowed"(value: boolean)
set "motd"(value: StringJS)
set "playerList"(value: $PlayerList$$Type)
set "defaultGameType"(value: $GameType$$Type)
get "spawnProtectionRadius"(): integer
set "playerIdleTimeout"(value: integer)
get "sessionService"(): $MinecraftSessionService
get "profileRepository"(): $GameProfileRepository
get "compressionThreshold"(): integer
get "nextTickTime"(): long
get "enforceWhitelist"(): boolean
get "packRepository"(): $PackRepository
set "enforceWhitelist"(value: boolean)
get "currentSmoothedTickTime"(): float
get "tickTimesNanos"(): (long)[]
get "recordingMetrics"(): boolean
get "currentlySaving"(): boolean
get "timeProfilerRunning"(): boolean
get "connection"(): $ServerConnectionListener
get "port"(): integer
get "shutdown"(): boolean
get "stopped"(): boolean
get "running"(): boolean
get "status"(): $ServerStatus
set "port"(value: integer)
get "dedicated"(): boolean
get "profiler"(): $ProfilerFiller
get "functions"(): $ServerFunctionManager
get "proxy"(): $Proxy
get "resourceManager"(): $ResourceManager
get "published"(): boolean
get "hardcore"(): boolean
get "worldData"(): $WorldData
get "advancements"(): $ServerAdvancementManager
get "ready"(): boolean
get "demo"(): boolean
get "singleplayer"(): boolean
get "paused"(): boolean
get "runningThread"(): $Thread
get "fixerUpper"(): $DataFixer
get "profileKeySignatureValidator"(): $SignatureValidator
get "scheduledEvents"(): $ScheduledEvents
get "customBossEvents"(): $CustomBossEvents
set "difficultyLocked"(value: boolean)
get "worldScreenshotFile"(): $Optional<($Path)>
get "keyPair"(): $KeyPair
get "data"(): $AttachedData
get "scoreboard"(): $ServerScoreboard
get "gameRules"(): $GameRules
get "commands"(): $Commands
get "persistentData"(): $CompoundTag
get "recipeManager"(): $RecipeManager
get "motd"(): StringJS
set "statusMessage"(value: $Component$$Type)
set "activePostShader"(value: $ResourceLocation$$Type)
get "name"(): $Component
get "mcEntities"(): $Iterable<($Entity)>
get "mcPlayers"(): $List<($Player)>
get "players"(): $EntityArrayList
public static get "summary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
get "entities"(): $EntityArrayList
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServer$$Type = ($MinecraftServer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServer$$Original = $MinecraftServer;}
declare module "net.minecraft.server.PlayerAdvancements" {
import {$Map} from "java.util.Map"
import {$ServerAdvancementManager$$Type} from "net.minecraft.server.ServerAdvancementManager"
import {$PlayerAdvancementsAccessor$$Interface} from "dev.uncandango.alltheleaks.mixin.core.main.accessor.PlayerAdvancementsAccessor"
import {$AdvancementHolder, $AdvancementHolder$$Type} from "net.minecraft.advancements.AdvancementHolder"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$Path$$Type} from "java.nio.file.Path"
import {$AdvancementProgress} from "net.minecraft.advancements.AdvancementProgress"
import {$PlayerList$$Type} from "net.minecraft.server.players.PlayerList"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"

export class $PlayerAdvancements implements $PlayerAdvancementsAccessor$$Interface {
readonly "progress": $Map<($AdvancementHolder), ($AdvancementProgress)>
 "player": $ServerPlayer

constructor(arg0: $DataFixer$$Type, arg1: $PlayerList$$Type, arg2: $ServerAdvancementManager$$Type, arg3: $Path$$Type, arg4: $ServerPlayer$$Type)

public "setPlayer"(arg0: $ServerPlayer$$Type): void
public "flushDirty"(arg0: $ServerPlayer$$Type): void
public "stopListening"(): void
public "getOrStartProgress"(arg0: $AdvancementHolder$$Type): $AdvancementProgress
public "revoke"(arg0: $AdvancementHolder$$Type, arg1: StringJS): boolean
public "reload"(arg0: $ServerAdvancementManager$$Type): void
public "save"(): void
public "award"(arg0: $AdvancementHolder$$Type, arg1: StringJS): boolean
public "getPlayer"(): $ServerPlayer
public "setSelectedTab"(arg0: $AdvancementHolder$$Type): void
set "selectedTab"(value: $AdvancementHolder$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAdvancements$$Type = ($PlayerAdvancements);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAdvancements$$Original = $PlayerAdvancements;}
declare module "net.minecraft.server.ServerLinks" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerLinks$Entry, $ServerLinks$Entry$$Type} from "net.minecraft.server.ServerLinks$Entry"
import {$Optional} from "java.util.Optional"
import {$ServerLinks$KnownLinkType, $ServerLinks$KnownLinkType$$Type} from "net.minecraft.server.ServerLinks$KnownLinkType"
import {$Either} from "com.mojang.datafixers.util.Either"
import {$List, $List$$Type} from "java.util.List"
import {$ServerLinks$UntrustedEntry} from "net.minecraft.server.ServerLinks$UntrustedEntry"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ServerLinks extends $Record {
static readonly "UNTRUSTED_LINKS_STREAM_CODEC": $StreamCodec<($ByteBuf), ($List<($ServerLinks$UntrustedEntry)>)>
static readonly "TYPE_STREAM_CODEC": $StreamCodec<($ByteBuf), ($Either<($ServerLinks$KnownLinkType), ($Component)>)>
static readonly "EMPTY": $ServerLinks

constructor(arg0: $List$$Type<($ServerLinks$Entry$$Type)>)

public "findKnownType"(arg0: $ServerLinks$KnownLinkType$$Type): $Optional<($ServerLinks$Entry)>
public "untrust"(): $List<($ServerLinks$UntrustedEntry)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "entries"(): $List<($ServerLinks$Entry)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$$Type = ({"entries"?: $List$$Type<($ServerLinks$Entry$$Type)>}) | ([entries?: $List$$Type<($ServerLinks$Entry$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$$Original = $ServerLinks;}
declare module "net.minecraft.server.ServerLinks$KnownLinkType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ServerLinks$Entry} from "net.minecraft.server.ServerLinks$Entry"
import {$Enum} from "java.lang.Enum"
import {$URI$$Type} from "java.net.URI"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $ServerLinks$KnownLinkType extends $Enum<($ServerLinks$KnownLinkType)> {
static readonly "SUPPORT": $ServerLinks$KnownLinkType
static readonly "FORUMS": $ServerLinks$KnownLinkType
static readonly "STATUS": $ServerLinks$KnownLinkType
static readonly "ANNOUNCEMENTS": $ServerLinks$KnownLinkType
static readonly "COMMUNITY": $ServerLinks$KnownLinkType
static readonly "BUG_REPORT": $ServerLinks$KnownLinkType
static readonly "NEWS": $ServerLinks$KnownLinkType
static readonly "COMMUNITY_GUIDELINES": $ServerLinks$KnownLinkType
static readonly "FEEDBACK": $ServerLinks$KnownLinkType
static readonly "WEBSITE": $ServerLinks$KnownLinkType
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ServerLinks$KnownLinkType)>

public static "values"(): ($ServerLinks$KnownLinkType)[]
public static "valueOf"(arg0: StringJS): $ServerLinks$KnownLinkType
public "create"(arg0: $URI$$Type): $ServerLinks$Entry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLinks$KnownLinkType$$Type = (("bug_report") | ("community_guidelines") | ("support") | ("status") | ("feedback") | ("community") | ("website") | ("forums") | ("news") | ("announcements"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLinks$KnownLinkType$$Original = $ServerLinks$KnownLinkType;}
declare module "net.minecraft.server.ReloadableServerRegistries$Holder" {
import {$HolderGetter$Provider} from "net.minecraft.core.HolderGetter$Provider"
import {$Collection} from "java.util.Collection"
import {$RegistryAccess$Frozen, $RegistryAccess$Frozen$$Type} from "net.minecraft.core.RegistryAccess$Frozen"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$LootTable, $LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"

export class $ReloadableServerRegistries$Holder {
constructor(arg0: $RegistryAccess$Frozen$$Type)

public "getKeys"(arg0: $ResourceKey$$Type<($Registry<(never)>)>): $Collection<($ResourceLocation)>
public "get"(): $RegistryAccess$Frozen
public "lookup"(): $HolderGetter$Provider
public "getLootTable"(arg0: $ResourceKey$$Type<($LootTable)>): $LootTable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadableServerRegistries$Holder$$Type = ($ReloadableServerRegistries$Holder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReloadableServerRegistries$Holder$$Original = $ReloadableServerRegistries$Holder;}
declare module "net.minecraft.server.ServerInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerInfo$$Interface {
get "maxPlayers"(): integer
get "serverVersion"(): StringJS
get "playerCount"(): integer
get "motd"(): StringJS
}

export class $ServerInfo implements $ServerInfo$$Interface {
 "getMaxPlayers"(): integer
 "getServerVersion"(): StringJS
 "getPlayerCount"(): integer
 "getMotd"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerInfo$$Type = ($ServerInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerInfo$$Original = $ServerInfo;}
declare module "net.minecraft.server.ServerFunctionManager" {
import {$Iterable} from "java.lang.Iterable"
import {$CommandFunction, $CommandFunction$$Type} from "net.minecraft.commands.functions.CommandFunction"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$IProfilingServerFunctionManager$$Interface} from "org.embeddedt.modernfix.duck.IProfilingServerFunctionManager"
import {$CommandDispatcher} from "com.mojang.brigadier.CommandDispatcher"
import {$ServerFunctionLibrary$$Type} from "net.minecraft.server.ServerFunctionLibrary"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$CommandSourceStack, $CommandSourceStack$$Type} from "net.minecraft.commands.CommandSourceStack"

export class $ServerFunctionManager implements $IProfilingServerFunctionManager$$Interface {
constructor(arg0: $MinecraftServer$$Type, arg1: $ServerFunctionLibrary$$Type)

public "getTagNames"(): $Iterable<($ResourceLocation)>
public "mfix$getProfilingResults"(): StringJS
public "getFunctionNames"(): $Iterable<($ResourceLocation)>
public "replaceLibrary"(arg0: $ServerFunctionLibrary$$Type): void
public "getTag"(arg0: $ResourceLocation$$Type): $Collection<($CommandFunction<($CommandSourceStack)>)>
public "tick"(): void
public "get"(arg0: $ResourceLocation$$Type): $Optional<($CommandFunction<($CommandSourceStack)>)>
public "execute"(arg0: $CommandFunction$$Type<($CommandSourceStack$$Type)>, arg1: $CommandSourceStack$$Type): void
public "getDispatcher"(): $CommandDispatcher<($CommandSourceStack)>
public "getGameLoopSender"(): $CommandSourceStack
get "tagNames"(): $Iterable<($ResourceLocation)>
get "functionNames"(): $Iterable<($ResourceLocation)>
get "dispatcher"(): $CommandDispatcher<($CommandSourceStack)>
get "gameLoopSender"(): $CommandSourceStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerFunctionManager$$Type = ($ServerFunctionManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerFunctionManager$$Original = $ServerFunctionManager;}
declare module "net.minecraft.server.MinecraftServer$ReloadableResources" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ReloadableServerResources, $ReloadableServerResources$$Type} from "net.minecraft.server.ReloadableServerResources"
import {$CloseableResourceManager, $CloseableResourceManager$$Type} from "net.minecraft.server.packs.resources.CloseableResourceManager"
import {$Record} from "java.lang.Record"

export class $MinecraftServer$ReloadableResources extends $Record implements $AutoCloseable$$Interface {
constructor(resourceManager: $CloseableResourceManager$$Type, managers: $ReloadableServerResources$$Type)

public "managers"(): $ReloadableServerResources
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "close"(): void
public "resourceManager"(): $CloseableResourceManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServer$ReloadableResources$$Type = ({"resourceManager"?: $CloseableResourceManager$$Type, "managers"?: $ReloadableServerResources$$Type}) | ([resourceManager?: $CloseableResourceManager$$Type, managers?: $ReloadableServerResources$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftServer$ReloadableResources$$Original = $MinecraftServer$ReloadableResources;}
declare module "net.minecraft.server.ServerScoreboard" {
import {$ScoreboardSaveData} from "net.minecraft.world.scores.ScoreboardSaveData"
import {$List} from "java.util.List"
import {$Objective$$Type} from "net.minecraft.world.scores.Objective"
import {$ScoreHolder$$Type} from "net.minecraft.world.scores.ScoreHolder"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$PlayerTeam$$Type} from "net.minecraft.world.scores.PlayerTeam"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$SavedData$Factory} from "net.minecraft.world.level.saveddata.SavedData$Factory"
import {$Scoreboard} from "net.minecraft.world.scores.Scoreboard"
import {$MinecraftServer$$Type} from "net.minecraft.server.MinecraftServer"
import {$DisplaySlot$$Type} from "net.minecraft.world.scores.DisplaySlot"

export class $ServerScoreboard extends $Scoreboard {
static readonly "HIDDEN_SCORE_PREFIX": StringJS

constructor(arg0: $MinecraftServer$$Type)

public "onTeamChanged"(arg0: $PlayerTeam$$Type): void
public "stopTrackingObjective"(arg0: $Objective$$Type): void
public "startTrackingObjective"(arg0: $Objective$$Type): void
public "addDirtyListener"(arg0: $Runnable$$Type): void
public "getStartTrackingPackets"(arg0: $Objective$$Type): $List<($Packet<(never)>)>
public "getStopTrackingPackets"(arg0: $Objective$$Type): $List<($Packet<(never)>)>
public "dataFactory"(): $SavedData$Factory<($ScoreboardSaveData)>
public "onObjectiveAdded"(arg0: $Objective$$Type): void
public "onPlayerRemoved"(arg0: $ScoreHolder$$Type): void
public "onPlayerScoreRemoved"(arg0: $ScoreHolder$$Type, arg1: $Objective$$Type): void
public "setDisplayObjective"(arg0: $DisplaySlot$$Type, arg1: $Objective$$Type): void
public "onObjectiveRemoved"(arg0: $Objective$$Type): void
public "onTeamAdded"(arg0: $PlayerTeam$$Type): void
public "onTeamRemoved"(arg0: $PlayerTeam$$Type): void
public "removePlayerFromTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): void
public "onObjectiveChanged"(arg0: $Objective$$Type): void
public "getObjectiveDisplaySlotCount"(arg0: $Objective$$Type): integer
public "addPlayerToTeam"(arg0: StringJS, arg1: $PlayerTeam$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerScoreboard$$Type = ($ServerScoreboard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerScoreboard$$Original = $ServerScoreboard;}
declare module "net.minecraft.server.RegistryLayer" {
import {$Enum} from "java.lang.Enum"
import {$LayeredRegistryAccess} from "net.minecraft.core.LayeredRegistryAccess"

export class $RegistryLayer extends $Enum<($RegistryLayer)> {
static readonly "WORLDGEN": $RegistryLayer
static readonly "DIMENSIONS": $RegistryLayer
static readonly "RELOADABLE": $RegistryLayer
static readonly "STATIC": $RegistryLayer

public static "createRegistryAccess"(): $LayeredRegistryAccess<($RegistryLayer)>
public static "values"(): ($RegistryLayer)[]
public static "valueOf"(arg0: StringJS): $RegistryLayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryLayer$$Type = (("static") | ("worldgen") | ("dimensions") | ("reloadable"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryLayer$$Original = $RegistryLayer;}
