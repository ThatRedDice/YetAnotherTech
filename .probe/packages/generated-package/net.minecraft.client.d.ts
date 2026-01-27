declare module "net.minecraft.client.Options" {
import {$HumanoidArm} from "net.minecraft.world.entity.HumanoidArm"
import {$List} from "java.util.List"
import {$NarratorStatus} from "net.minecraft.client.NarratorStatus"
import {$TutorialSteps} from "net.minecraft.client.tutorial.TutorialSteps"
import {$PlayerModelPart$$Type} from "net.minecraft.world.entity.player.PlayerModelPart"
import {$PrioritizeChunkUpdates} from "net.minecraft.client.PrioritizeChunkUpdates"
import {$ParticleStatus} from "net.minecraft.client.ParticleStatus"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IMixinOptions$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinOptions"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Set} from "java.util.Set"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$AttackIndicatorStatus} from "net.minecraft.client.AttackIndicatorStatus"
import {$CloudStatus} from "net.minecraft.client.CloudStatus"
import {$File, $File$$Type} from "java.io.File"
import {$PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$CameraType, $CameraType$$Type} from "net.minecraft.client.CameraType"
import {$KeyMapping, $KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$ClientInformation} from "net.minecraft.server.level.ClientInformation"
import {$Options$FieldAccess$$Type} from "net.minecraft.client.Options$FieldAccess"
import {$InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$ChatVisiblity} from "net.minecraft.world.entity.player.ChatVisiblity"
import {$GraphicsStatus} from "net.minecraft.client.GraphicsStatus"

export class $Options implements $IMixinOptions$$Interface {
 "tutorialStep": $TutorialSteps
static readonly "RENDER_DISTANCE_REALLY_FAR": integer
static readonly "DEFAULT_SOUND_DEVICE": StringJS
readonly "keyChat": $KeyMapping
 "resourcePacks": $List<(StringJS)>
readonly "keyInventory": $KeyMapping
readonly "keyCommand": $KeyMapping
readonly "keySwapOffhand": $KeyMapping
readonly "keyHotbarSlots": ($KeyMapping)[]
readonly "keySpectatorOutlines": $KeyMapping
static readonly "RENDER_DISTANCE_NORMAL": integer
readonly "keySprint": $KeyMapping
readonly "keyAdvancements": $KeyMapping
static readonly "RENDER_DISTANCE_EXTREME": integer
readonly "keySaveHotbarActivator": $KeyMapping
 "advancedItemTooltips": boolean
 "fullscreenVideoModeString": StringJS
readonly "keyFullscreen": $KeyMapping
 "incompatibleResourcePacks": $List<(StringJS)>
 "languageCode": StringJS
static readonly "RENDER_DISTANCE_SHORT": integer
readonly "keyDrop": $KeyMapping
 "overrideHeight": integer
 "keyMappings": ($KeyMapping)[]
readonly "keyAttack": $KeyMapping
 "skipMultiplayerWarning": boolean
static readonly "RENDER_DISTANCE_FAR": integer
readonly "keyUp": $KeyMapping
readonly "keyJump": $KeyMapping
readonly "keyLoadHotbarActivator": $KeyMapping
 "onboardAccessibility": boolean
readonly "keyShift": $KeyMapping
 "smoothCamera": boolean
readonly "keyScreenshot": $KeyMapping
static readonly "AUTO_GUI_SCALE": integer
readonly "keyTogglePerspective": $KeyMapping
readonly "keySocialInteractions": $KeyMapping
 "pauseOnLostFocus": boolean
readonly "keyRight": $KeyMapping
 "lastMpIp": StringJS
 "syncWrites": boolean
readonly "keySmoothCamera": $KeyMapping
 "overrideWidth": integer
readonly "keyLeft": $KeyMapping
 "hideServerAddress": boolean
 "glDebugVerbosity": integer
static readonly "RENDER_DISTANCE_TINY": integer
readonly "keyPlayerList": $KeyMapping
static readonly "UNLIMITED_FRAMERATE_CUTOFF": integer
 "joinedFirstServer": boolean
 "hideBundleTutorial": boolean
readonly "keyUse": $KeyMapping
readonly "keyPickItem": $KeyMapping
readonly "keyDown": $KeyMapping
 "hideGui": boolean

constructor(arg0: $Minecraft$$Type, arg1: $File$$Type)

public "chatColors"(): $OptionInstance<(boolean)>
public "mainHand"(): $OptionInstance<($HumanoidArm)>
public "bobView"(): $OptionInstance<(boolean)>
public "fov"(): $OptionInstance<(integer)>
public "load"(arg0: boolean): void
public "load"(): void
public "save"(): void
public "getFile"(): $File
public "setKey"(arg0: $KeyMapping$$Type, arg1: $InputConstants$Key$$Type): void
public "darkMojangStudiosBackground"(): $OptionInstance<(boolean)>
public "gamma"(): $OptionInstance<(double)>
public "getBackgroundColor"(arg0: float): integer
public "getBackgroundColor"(arg0: integer): integer
public "narrator"(): $OptionInstance<($NarratorStatus)>
public "glintStrength"(): $OptionInstance<(double)>
public "framerateLimit"(): $OptionInstance<(integer)>
public "loadSelectedResourcePacks"(arg0: $PackRepository$$Type): void
public "mipmapLevels"(): $OptionInstance<(integer)>
public "fullscreen"(): $OptionInstance<(boolean)>
public "enableVsync"(): $OptionInstance<(boolean)>
public "rawMouseInput"(): $OptionInstance<(boolean)>
public "chatDelay"(): $OptionInstance<(double)>
public "forceUnicodeFont"(): $OptionInstance<(boolean)>
public "graphicsMode"(): $OptionInstance<($GraphicsStatus)>
public "cloudStatus"(): $OptionInstance<($CloudStatus)>
public "biomeBlendRadius"(): $OptionInstance<(integer)>
public "guiScale"(): $OptionInstance<(integer)>
public "dumpOptionsForReport"(): StringJS
public "particles"(): $OptionInstance<($ParticleStatus)>
public "getCameraType"(): $CameraType
public "setCameraType"(arg0: $CameraType$$Type): void
public "telemetryOptInExtra"(): $OptionInstance<(boolean)>
public "chatVisibility"(): $OptionInstance<($ChatVisiblity)>
public "ambientOcclusion"(): $OptionInstance<(boolean)>
public "getEffectiveRenderDistance"(): integer
public "renderDistance"(): $OptionInstance<(integer)>
public "reducedDebugInfo"(): $OptionInstance<(boolean)>
public "glintSpeed"(): $OptionInstance<(double)>
public "chatOpacity"(): $OptionInstance<(double)>
public "textBackgroundOpacity"(): $OptionInstance<(double)>
public "menuBackgroundBlurriness"(): $OptionInstance<(integer)>
public "getMenuBackgroundBlurriness"(): integer
public "fovEffectScale"(): $OptionInstance<(double)>
public "damageTiltStrength"(): $OptionInstance<(double)>
public "screenEffectScale"(): $OptionInstance<(double)>
public "getCloudsType"(): $CloudStatus
public "prioritizeChunkUpdates"(): $OptionInstance<($PrioritizeChunkUpdates)>
public "autoJump"(): $OptionInstance<(boolean)>
public "chatLinks"(): $OptionInstance<(boolean)>
public "chatLinksPrompt"(): $OptionInstance<(boolean)>
public "hideSplashTexts"(): $OptionInstance<(boolean)>
public "hideLightningFlash"(): $OptionInstance<(boolean)>
public "simulationDistance"(): $OptionInstance<(integer)>
public "onboardingAccessibilityFinished"(): void
public "operatorItemsTab"(): $OptionInstance<(boolean)>
public "touchscreen"(): $OptionInstance<(boolean)>
public "highContrast"(): $OptionInstance<(boolean)>
public "narratorHotkey"(): $OptionInstance<(boolean)>
public "chatScale"(): $OptionInstance<(double)>
public "chatWidth"(): $OptionInstance<(double)>
public "chatHeightUnfocused"(): $OptionInstance<(double)>
public "chatHeightFocused"(): $OptionInstance<(double)>
public "useNativeTransport"(): boolean
public "attackIndicator"(): $OptionInstance<($AttackIndicatorStatus)>
public "mouseWheelSensitivity"(): $OptionInstance<(double)>
public "autoSuggestions"(): $OptionInstance<(boolean)>
public "entityShadows"(): $OptionInstance<(boolean)>
public "japaneseGlyphVariants"(): $OptionInstance<(boolean)>
public "invertYMouse"(): $OptionInstance<(boolean)>
public "discreteMouseScroll"(): $OptionInstance<(boolean)>
public "realmsNotifications"(): $OptionInstance<(boolean)>
public "allowServerListing"(): $OptionInstance<(boolean)>
public "showSubtitles"(): $OptionInstance<(boolean)>
public "directionalAudio"(): $OptionInstance<(boolean)>
public "backgroundForChatOnly"(): $OptionInstance<(boolean)>
public "toggleCrouch"(): $OptionInstance<(boolean)>
public "toggleSprint"(): $OptionInstance<(boolean)>
public "hideMatchedNames"(): $OptionInstance<(boolean)>
public "showAutosaveIndicator"(): $OptionInstance<(boolean)>
public "onlyShowSecureChat"(): $OptionInstance<(boolean)>
public "darknessEffectScale"(): $OptionInstance<(double)>
public "soundDevice"(): $OptionInstance<(StringJS)>
public "updateResourcePacks"(arg0: $PackRepository$$Type): void
public "notificationDisplayTime"(): $OptionInstance<(double)>
public "sensitivity"(): $OptionInstance<(double)>
public "entityDistanceScaling"(): $OptionInstance<(double)>
public "chatLineSpacing"(): $OptionInstance<(double)>
public "panoramaSpeed"(): $OptionInstance<(double)>
public "getSoundSourceVolume"(arg0: $SoundSource$$Type): float
public "getSoundSourceOptionInstance"(arg0: $SoundSource$$Type): $OptionInstance<(double)>
public static "genericValueOrOffLabel"(arg0: $Component$$Type, arg1: integer): $Component
public "getBackgroundOpacity"(arg0: float): float
public "broadcastOptions"(): void
public "buildPlayerInformation"(): $ClientInformation
public "isModelPartEnabled"(arg0: $PlayerModelPart$$Type): boolean
public "toggleModelPart"(arg0: $PlayerModelPart$$Type, arg1: boolean): void
public "setServerRenderDistance"(arg0: integer): void
public static "genericValueLabel"(arg0: $Component$$Type, arg1: integer): $Component
public static "genericValueLabel"(arg0: $Component$$Type, arg1: $Component$$Type): $Component
public "getModelPartsFancyMenu"(): $Set
public "invokeProcessOptionsFancyMenu"(arg0: $Options$FieldAccess$$Type): void
get "file"(): $File
get "cameraType"(): $CameraType
set "cameraType"(value: $CameraType$$Type)
get "effectiveRenderDistance"(): integer
get "cloudsType"(): $CloudStatus
set "serverRenderDistance"(value: integer)
get "modelPartsFancyMenu"(): $Set
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Options$$Type = ($Options);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Options$$Original = $Options;}
declare module "net.minecraft.client.CommandHistory" {
import {$Collection} from "java.util.Collection"
import {$Path$$Type} from "java.nio.file.Path"

export class $CommandHistory {
constructor(arg0: $Path$$Type)

public "history"(): $Collection<(StringJS)>
public "addCommand"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandHistory$$Type = ($CommandHistory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CommandHistory$$Original = $CommandHistory;}
declare module "net.minecraft.client.OptionInstance$Enum" {
import {$Optional} from "java.util.Optional"
import {$CycleButton$ValueListSupplier} from "net.minecraft.client.gui.components.CycleButton$ValueListSupplier"
import {$List, $List$$Type} from "java.util.List"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function} from "java.util.function.Function"
import {$OptionInstance$CycleableValueSet$$Interface} from "net.minecraft.client.OptionInstance$CycleableValueSet"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$Record} from "java.lang.Record"

export class $OptionInstance$Enum<T> extends $Record implements $OptionInstance$CycleableValueSet$$Interface<(T)> {
constructor(arg0: $List$$Type<(T)>, arg1: $Codec$$Type<(T)>)

public "validateValue"(arg0: T): $Optional<(T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "values"(): $List<(T)>
public "hashCode"(): integer
public "codec"(): $Codec<(T)>
public "valueListSupplier"(): $CycleButton$ValueListSupplier<(T)>
public "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$Enum$$Type<T> = ({"values"?: $List$$Type<(T)>, "codec"?: $Codec$$Type<(T)>}) | ([values?: $List$$Type<(T)>, codec?: $Codec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$Enum$$Original<T> = $OptionInstance$Enum<(T)>;}
declare module "net.minecraft.client.CameraType" {
import {$Enum} from "java.lang.Enum"

export class $CameraType extends $Enum<($CameraType)> {
static readonly "THIRD_PERSON_BACK": $CameraType
static readonly "THIRD_PERSON_FRONT": $CameraType
static readonly "FIRST_PERSON": $CameraType

public static "values"(): ($CameraType)[]
public static "valueOf"(arg0: StringJS): $CameraType
public "isMirrored"(): boolean
public "cycle"(): $CameraType
public "isFirstPerson"(): boolean
get "mirrored"(): boolean
get "firstPerson"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraType$$Type = (("first_person") | ("third_person_back") | ("third_person_front"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CameraType$$Original = $CameraType;}
declare module "net.minecraft.client.NarratorStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $NarratorStatus extends $Enum<($NarratorStatus)> {
static readonly "SYSTEM": $NarratorStatus
static readonly "ALL": $NarratorStatus
static readonly "CHAT": $NarratorStatus
static readonly "OFF": $NarratorStatus

public "getName"(): $Component
public static "values"(): ($NarratorStatus)[]
public static "valueOf"(arg0: StringJS): $NarratorStatus
public "getId"(): integer
public static "byId"(arg0: integer): $NarratorStatus
public "shouldNarrateChat"(): boolean
public "shouldNarrateSystem"(): boolean
get "name"(): $Component
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NarratorStatus$$Type = (("off") | ("all") | ("chat") | ("system"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NarratorStatus$$Original = $NarratorStatus;}
declare module "net.minecraft.client.StringSplitter" {
import {$StringSplitter$WidthProvider$$Type} from "net.minecraft.client.StringSplitter$WidthProvider"
import {$FormattedCharSequence$$Type} from "net.minecraft.util.FormattedCharSequence"
import {$FormattedText, $FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List} from "java.util.List"
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$StringSplitter$LinePosConsumer$$Type} from "net.minecraft.client.StringSplitter$LinePosConsumer"

export class $StringSplitter {
constructor(arg0: $StringSplitter$WidthProvider$$Type)

public static "getWordPosition"(arg0: StringJS, arg1: integer, arg2: integer, arg3: boolean): integer
public "plainTailByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "plainHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "headByWidth"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $FormattedText
public "stringWidth"(arg0: StringJS): float
public "stringWidth"(arg0: $FormattedText$$Type): float
public "stringWidth"(arg0: $FormattedCharSequence$$Type): float
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $FormattedText$$Type): $List<($FormattedText)>
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type, arg3: $BiConsumer$$Type<($FormattedText), (boolean)>): void
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type, arg3: boolean, arg4: $StringSplitter$LinePosConsumer$$Type): void
public "splitLines"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "splitLines"(arg0: $FormattedText$$Type, arg1: integer, arg2: $Style$$Type): $List<($FormattedText)>
public "componentStyleAtWidth"(arg0: $FormattedCharSequence$$Type, arg1: integer): $Style
public "componentStyleAtWidth"(arg0: $FormattedText$$Type, arg1: integer): $Style
public "plainIndexAtWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "formattedIndexByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
public "formattedHeadByWidth"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): StringJS
public "findLineBreak"(arg0: StringJS, arg1: integer, arg2: $Style$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitter$$Type = ($StringSplitter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitter$$Original = $StringSplitter;}
declare module "net.minecraft.client.Options$OptionAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Options$OptionAccess$$Interface {
}

export class $Options$OptionAccess implements $Options$OptionAccess$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Options$OptionAccess$$Type = ($Options$OptionAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Options$OptionAccess$$Original = $Options$OptionAccess;}
declare module "net.minecraft.client.RecipeBookCategories" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Enum} from "java.lang.Enum"
import {$List} from "java.util.List"
import {$RecipeBookType$$Type} from "net.minecraft.world.inventory.RecipeBookType"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $RecipeBookCategories extends $Enum<($RecipeBookCategories)> implements $IExtensibleEnum$$Interface {
static readonly "CRAFTING_EQUIPMENT": $RecipeBookCategories
static readonly "BLAST_FURNACE_BLOCKS": $RecipeBookCategories
static readonly "BLAST_FURNACE_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "CRAFTING_REDSTONE": $RecipeBookCategories
static readonly "CRAFTING_MISC": $RecipeBookCategories
static readonly "CAMPFIRE": $RecipeBookCategories
static readonly "FURNACE_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "CRAFTING_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "SMITHING": $RecipeBookCategories
static readonly "FURNACE_FOOD": $RecipeBookCategories
static readonly "CRAFTING_SEARCH": $RecipeBookCategories
static readonly "BLAST_FURNACE_MISC": $RecipeBookCategories
static readonly "SMOKER_FOOD": $RecipeBookCategories
static readonly "CRAFTING_BUILDING_BLOCKS": $RecipeBookCategories
static readonly "SMOKER_CATEGORIES": $List<($RecipeBookCategories)>
static readonly "FURNACE_BLOCKS": $RecipeBookCategories
static readonly "SMOKER_SEARCH": $RecipeBookCategories
static readonly "STONECUTTER": $RecipeBookCategories
static readonly "FURNACE_SEARCH": $RecipeBookCategories
static readonly "BLAST_FURNACE_SEARCH": $RecipeBookCategories
static readonly "UNKNOWN": $RecipeBookCategories
static readonly "FURNACE_MISC": $RecipeBookCategories
static readonly "AGGREGATE_CATEGORIES": $Map<($RecipeBookCategories), ($List<($RecipeBookCategories)>)>

public "getIconItems"(): $List<($ItemStack)>
public static "getCategories"(arg0: $RecipeBookType$$Type): $List<($RecipeBookCategories)>
public static "values"(): ($RecipeBookCategories)[]
public static "valueOf"(arg0: StringJS): $RecipeBookCategories
public static "getExtensionInfo"(): $ExtensionInfo
get "iconItems"(): $List<($ItemStack)>
public static get "extensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookCategories$$Type = (("crafting_search") | ("crafting_building_blocks") | ("crafting_redstone") | ("crafting_equipment") | ("crafting_misc") | ("furnace_search") | ("furnace_food") | ("furnace_blocks") | ("furnace_misc") | ("blast_furnace_search") | ("blast_furnace_blocks") | ("blast_furnace_misc") | ("smoker_search") | ("smoker_food") | ("stonecutter") | ("smithing") | ("campfire") | ("unknown"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookCategories$$Original = $RecipeBookCategories;}
declare module "net.minecraft.client.StringSplitter$WidthProvider" {
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"

export interface $StringSplitter$WidthProvider$$Interface {

(arg0: integer, arg1: $Style): float
}

export class $StringSplitter$WidthProvider implements $StringSplitter$WidthProvider$$Interface {
 "getWidth"(arg0: integer, arg1: $Style$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitter$WidthProvider$$Type = ((arg0: integer, arg1: $Style) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitter$WidthProvider$$Original = $StringSplitter$WidthProvider;}
declare module "net.minecraft.client.GuiMessageTag$Icon" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Enum} from "java.lang.Enum"

export class $GuiMessageTag$Icon extends $Enum<($GuiMessageTag$Icon)> {
static readonly "CHAT_MODIFIED": $GuiMessageTag$Icon
readonly "sprite": $ResourceLocation
readonly "width": integer
readonly "height": integer

public static "values"(): ($GuiMessageTag$Icon)[]
public static "valueOf"(arg0: StringJS): $GuiMessageTag$Icon
public "draw"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageTag$Icon$$Type = (("chat_modified"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessageTag$Icon$$Original = $GuiMessageTag$Icon;}
declare module "net.minecraft.client.Minecraft" {
import {$RenderBuffers} from "net.minecraft.client.renderer.RenderBuffers"
import {$MultiPlayerGameMode} from "net.minecraft.client.multiplayer.MultiPlayerGameMode"
import {$LevelStorageSource$LevelStorageAccess$$Type} from "net.minecraft.world.level.storage.LevelStorageSource$LevelStorageAccess"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PlayerSocialManager} from "net.minecraft.client.gui.screens.social.PlayerSocialManager"
import {$MobEffectTextureManager} from "net.minecraft.client.resources.MobEffectTextureManager"
import {$ClientPacketListener} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$Minecraft$ChatStatus} from "net.minecraft.client.Minecraft$ChatStatus"
import {$ResourceLoadStateTracker} from "net.minecraft.client.ResourceLoadStateTracker"
import {$ServerData} from "net.minecraft.client.multiplayer.ServerData"
import {$LocalPlayer} from "net.minecraft.client.player.LocalPlayer"
import {$MinecraftClientKJS$$Interface} from "dev.latvian.mods.kubejs.core.MinecraftClientKJS"
import {$Proxy} from "java.net.Proxy"
import {$InputType, $InputType$$Type} from "net.minecraft.client.InputType"
import {$MusicManager} from "net.minecraft.client.sounds.MusicManager"
import {$PaintingTextureManager} from "net.minecraft.client.resources.PaintingTextureManager"
import {$ChatListener} from "net.minecraft.client.multiplayer.chat.ChatListener"
import {$GameConfig$$Type} from "net.minecraft.client.main.GameConfig"
import {$ScheduledEvents$ScheduledEvent} from "dev.latvian.mods.kubejs.util.ScheduledEvents$ScheduledEvent"
import {$MouseHandler} from "net.minecraft.client.MouseHandler"
import {$ProfileKeyPairManager} from "net.minecraft.client.multiplayer.ProfileKeyPairManager"
import {$GameRenderer} from "net.minecraft.client.renderer.GameRenderer"
import {$WindowEventHandler$$Interface} from "com.mojang.blaze3d.platform.WindowEventHandler"
import {$CrashReport, $CrashReport$$Type} from "net.minecraft.CrashReport"
import {$Thread} from "java.lang.Thread"
import {$SkinManager} from "net.minecraft.client.resources.SkinManager"
import {$MinecraftSessionService} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$Options, $Options$$Type} from "net.minecraft.client.Options"
import {$Tutorial} from "net.minecraft.client.tutorial.Tutorial"
import {$TextureManager} from "net.minecraft.client.renderer.texture.TextureManager"
import {$Window} from "com.mojang.blaze3d.platform.Window"
import {$Music} from "net.minecraft.sounds.Music"
import {$ResourceManager} from "net.minecraft.server.packs.resources.ResourceManager"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$EntityModelSet} from "net.minecraft.client.model.geom.EntityModelSet"
import {$Screen, $Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$DirectoryValidator} from "net.minecraft.world.level.validation.DirectoryValidator"
import {$ReportingContext} from "net.minecraft.client.multiplayer.chat.report.ReportingContext"
import {$IMinecraftExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IMinecraftExtension"
import {$Font} from "net.minecraft.client.gui.Font"
import {$FontManager} from "net.minecraft.client.gui.font.FontManager"
import {$DebugScreenOverlay} from "net.minecraft.client.gui.components.DebugScreenOverlay"
import {$Minecraft$GameLoadCookie$$Type} from "net.minecraft.client.Minecraft$GameLoadCookie"
import {$WorldStem$$Type} from "net.minecraft.server.WorldStem"
import {$SoundManager} from "net.minecraft.client.sounds.SoundManager"
import {$Function} from "java.util.function.Function"
import {$KeyboardHandler} from "net.minecraft.client.KeyboardHandler"
import {$ReentrantBlockableEventLoop} from "net.minecraft.util.thread.ReentrantBlockableEventLoop"
import {$RenderTarget} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$User} from "net.minecraft.client.User"
import {$SplashManager} from "net.minecraft.client.resources.SplashManager"
import {$LevelRenderer} from "net.minecraft.client.renderer.LevelRenderer"
import {$GpuWarnlistManager} from "net.minecraft.client.renderer.GpuWarnlistManager"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$ScheduledEvents$Callback$$Type} from "dev.latvian.mods.kubejs.util.ScheduledEvents$Callback"
import {$GameProfile} from "com.mojang.authlib.GameProfile"
import {$RealmsDataFetcher} from "com.mojang.realmsclient.gui.RealmsDataFetcher"
import {$ParticleEngine} from "net.minecraft.client.particle.ParticleEngine"
import {$ToastComponent} from "net.minecraft.client.gui.components.toasts.ToastComponent"
import {$MinecraftAccessor$$Interface as $MinecraftAccessor$0$$Interface} from "com.simibubi.create.foundation.mixin.accessor.MinecraftAccessor"
import {$DataFixer} from "com.mojang.datafixers.DataFixer"
import {$ProfilerFiller} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ItemRenderer} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$Overlay, $Overlay$$Type} from "net.minecraft.client.gui.screens.Overlay"
import {$VanillaPackResources} from "net.minecraft.server.packs.VanillaPackResources"
import {$ReceivingLevelScreen$Reason$$Type} from "net.minecraft.client.gui.screens.ReceivingLevelScreen$Reason"
import {$TickDuration$$Type} from "dev.latvian.mods.kubejs.util.TickDuration"
import {$Gui} from "net.minecraft.client.gui.Gui"
import {$CommandHistory} from "net.minecraft.client.CommandHistory"
import {$SignatureValidator} from "net.minecraft.util.SignatureValidator"
import {$File, $File$$Type} from "java.io.File"
import {$MinecraftAccess$$Interface} from "blusunrize.immersiveengineering.mixin.accessors.client.MinecraftAccess"
import {$IMixinMinecraft$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinMinecraft"
import {$HitResult} from "net.minecraft.world.phys.HitResult"
import {$Locale} from "java.util.Locale"
import {$ModCheck} from "net.minecraft.util.ModCheck"
import {$GameNarrator} from "net.minecraft.client.GameNarrator"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockEntityRenderDispatcher} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$HotbarManager} from "net.minecraft.client.HotbarManager"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$IntegratedServer} from "net.minecraft.client.server.IntegratedServer"
import {$GuiSpriteManager} from "net.minecraft.client.gui.GuiSpriteManager"
import {$LevelStorageSource} from "net.minecraft.world.level.storage.LevelStorageSource"
import {$BanDetails} from "com.mojang.authlib.minecraft.BanDetails"
import {$DownloadedPackSource} from "net.minecraft.client.resources.server.DownloadedPackSource"
import {$DeltaTracker} from "net.minecraft.client.DeltaTracker"
import {$StoringChunkProgressListener} from "net.minecraft.server.level.progress.StoringChunkProgressListener"
import {$Path} from "java.nio.file.Path"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MinecraftAccessor$$Interface} from "org.embeddedt.embeddium.impl.mixin.core.render.MinecraftAccessor"
import {$UUID$$Type} from "java.util.UUID"
import {$ScheduledEvents} from "dev.latvian.mods.kubejs.util.ScheduledEvents"
import {$Runnable} from "java.lang.Runnable"
import {$ProcessorHandle} from "net.minecraft.util.thread.ProcessorHandle"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockRenderDispatcher} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$DebugRenderer} from "net.minecraft.client.renderer.debug.DebugRenderer"
import {$Throwable$$Type} from "java.lang.Throwable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MapDecorationTextureManager} from "net.minecraft.client.resources.MapDecorationTextureManager"
import {$QuickPlayLog} from "net.minecraft.client.quickplay.QuickPlayLog"
import {$PackRepository, $PackRepository$$Type} from "net.minecraft.server.packs.repository.PackRepository"
import {$KeyMapping$$Type} from "net.minecraft.client.KeyMapping"
import {$LanguageManager, $LanguageManager$$Type} from "net.minecraft.client.resources.language.LanguageManager"
import {$ModelManager} from "net.minecraft.client.resources.model.ModelManager"
import {$BlockColors} from "net.minecraft.client.color.block.BlockColors"
import {$WorldOpenFlows} from "net.minecraft.client.gui.screens.worldselection.WorldOpenFlows"
import {$ItemColors} from "net.minecraft.client.color.item.ItemColors"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ReportEnvironment$$Type} from "net.minecraft.client.multiplayer.chat.report.ReportEnvironment"
import {$Connection} from "net.minecraft.network.Connection"
import {$ClientTelemetryManager} from "net.minecraft.client.telemetry.ClientTelemetryManager"

export class $Minecraft extends $ReentrantBlockableEventLoop<($Runnable)> implements $WindowEventHandler$$Interface, $IMinecraftExtension$$Interface, $MinecraftClientKJS$$Interface, $MinecraftAccess$$Interface, $IMixinMinecraft$$Interface, $MinecraftAccessor$0$$Interface, $MinecraftAccessor$$Interface {
 "crosshairPickEntity": $Entity
 "screen": $Screen
 "cameraEntity": $Entity
 "sectionVisibility": boolean
static readonly "ON_OSX": boolean
readonly "mouseHandler": $MouseHandler
static readonly "UNIFORM_FONT": $ResourceLocation
readonly "gameRenderer": $GameRenderer
 "wireframe": boolean
readonly "options": $Options
readonly "levelRenderer": $LevelRenderer
 "player": $LocalPlayer
 "pendingConnection": $Connection
readonly "fontFilterFishy": $Font
 "level": $ClientLevel
readonly "gameDirectory": $File
static "fps": integer
 "sectionPath": boolean
readonly "debugRenderer": $DebugRenderer
 "noRender": boolean
static readonly "DEFAULT_FONT": $ResourceLocation
 "fpsString": StringJS
readonly "keyboardHandler": $KeyboardHandler
readonly "fontManager": $FontManager
static readonly "UPDATE_DRIVERS_ADVICE": StringJS
readonly "particleEngine": $ParticleEngine
 "clientTickCount": long
readonly "gui": $Gui
 "gameMode": $MultiPlayerGameMode
static readonly "ALT_FONT": $ResourceLocation
 "hitResult": $HitResult
 "smartCull": boolean
readonly "font": $Font

constructor(arg0: $GameConfig$$Type)

public "getConnection"(): $ClientPacketListener
public "tick"(): void
public "setLevel"(arg0: $ClientLevel$$Type, arg1: $ReceivingLevelScreen$Reason$$Type): void
public "run"(): void
public static "getInstance"(): $Minecraft
public "stop"(): void
public "destroy"(): void
public "close"(): void
public "disconnect"(arg0: $Screen$$Type): void
public "disconnect"(arg0: $Screen$$Type, arg1: boolean): void
public "disconnect"(): void
public "isRunning"(): boolean
public static "crash"(arg0: $Minecraft$$Type, arg1: $File$$Type, arg2: $CrashReport$$Type): void
public "getProfiler"(): $ProfilerFiller
public "getCurrentServer"(): $ServerData
public "getProxy"(): $Proxy
public "getResourceManager"(): $ResourceManager
public "getTextureManager"(): $TextureManager
public "getWindow"(): $Window
public "setOverlay"(arg0: $Overlay$$Type): void
public "getVanillaPackResources"(): $VanillaPackResources
public "getGuiSprites"(): $GuiSpriteManager
public "getItemRenderer"(): $ItemRenderer
public "getTimer"(): $DeltaTracker
public "renderBuffers"(): $RenderBuffers
public "allowsMultiplayer"(): boolean
public "realmsDataFetcher"(): $RealmsDataFetcher
public "quickPlayLog"(): $QuickPlayLog
public "isLocalServer"(): boolean
public "commandHistory"(): $CommandHistory
public "directoryValidator"(): $DirectoryValidator
public "setWindowActive"(arg0: boolean): void
public "getBlockRenderer"(): $BlockRenderDispatcher
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "resizeDisplay"(): void
public "setScreen"(arg0: $Screen$$Type): void
public "isGameLoadFinished"(): boolean
public "multiplayerBan"(): $BanDetails
public "updateTitle"(): void
public static "checkModStatus"(): $ModCheck
public "clearResourcePacksOnError"(arg0: $Throwable$$Type, arg1: $Component$$Type, arg2: $Minecraft$GameLoadCookie$$Type): void
public "reloadResourcePacks"(): $CompletableFuture<(void)>
public "getToasts"(): $ToastComponent
public "getDebugOverlay"(): $DebugScreenOverlay
public "emergencySaveAndCrash"(arg0: $CrashReport$$Type): void
public "getMainRenderTarget"(): $RenderTarget
public "getLaunchedVersion"(): StringJS
public "getVersionType"(): StringJS
public "delayCrash"(arg0: $CrashReport$$Type): void
public "delayCrashRaw"(arg0: $CrashReport$$Type): void
public "fillReport"(arg0: $CrashReport$$Type): $CrashReport
public static "fillReport"(arg0: $Minecraft$$Type, arg1: $LanguageManager$$Type, arg2: StringJS, arg3: $Options$$Type, arg4: $CrashReport$$Type): void
public "isEnforceUnicode"(): boolean
public "getModelManager"(): $ModelManager
public "getLevelSource"(): $LevelStorageSource
public "getChatStatus"(): $Minecraft$ChatStatus
public "setLastInputType"(arg0: $InputType$$Type): void
public "hasSingleplayerServer"(): boolean
public "cursorEntered"(): void
public "getFps"(): integer
public "getFrameTimeNs"(): long
public "debugClientMetricsStart"(arg0: $Consumer$$Type<($Component)>): boolean
public "getSingleplayerServer"(): $IntegratedServer
public "debugFpsMeterKeyPress"(arg0: integer): void
public "pauseGame"(arg0: boolean): void
public "getMusicManager"(): $MusicManager
public "handler$chb000$inventoryprofilesnext$handleInputEvents"(arg0: $CallbackInfo$$Type): void
public "getCameraEntity"(): $Entity
public "getTelemetryManager"(): $ClientTelemetryManager
public "getGpuUtilization"(): double
public "getProfileKeyPairManager"(): $ProfileKeyPairManager
public "createWorldOpenFlows"(): $WorldOpenFlows
public "doWorldLoad"(arg0: $LevelStorageSource$LevelStorageAccess$$Type, arg1: $PackRepository$$Type, arg2: $WorldStem$$Type, arg3: boolean): void
public "updateReportEnvironment"(arg0: $ReportEnvironment$$Type): void
public "getUser"(): $User
public "clearDownloadedResourcePacks"(): void
public "clearClientLevel"(arg0: $Screen$$Type): void
public "handler$boc000$oculus$iris$trackLastDimensionOnLeave"(arg0: $Screen$$Type, arg1: $CallbackInfo$$Type): void
public "forceSetScreen"(arg0: $Screen$$Type): void
public "telemetryOptInExtra"(): boolean
public "extraTelemetryAvailable"(): boolean
public "allowsTelemetry"(): boolean
public "isNameBanned"(): boolean
public "allowsRealms"(): boolean
public "isBlocked"(arg0: $UUID$$Type): boolean
public "isDemo"(): boolean
public static "renderNames"(): boolean
public static "useFancyGraphics"(): boolean
public static "useShaderTransparency"(): boolean
public static "useAmbientOcclusion"(): boolean
public "handler$efb000$ae2$pickColor"(arg0: $CallbackInfo$$Type): void
public "addCustomNbtData"(arg0: $ItemStack$$Type, arg1: $BlockEntity$$Type, arg2: $RegistryAccess$$Type): void
public "handler$cjb000$transition$fillReport"(theCrash: $CrashReport$$Type, ci: $CallbackInfoReturnable$$Type): void
public static "getLauncherBrand"(): StringJS
public "getGpuWarnlistManager"(): $GpuWarnlistManager
public "delayTextureReload"(): $CompletableFuture<(void)>
public "isSingleplayer"(): boolean
public "isLocalPlayer"(arg0: $UUID$$Type): boolean
public "getGameProfile"(): $GameProfile
public "getResourcePackRepository"(): $PackRepository
public "getDownloadedPackSource"(): $DownloadedPackSource
public "getResourcePackDirectory"(): $Path
public "getLanguageManager"(): $LanguageManager
public "getTextureAtlas"(arg0: $ResourceLocation$$Type): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "isPaused"(): boolean
public "getSoundManager"(): $SoundManager
public "getSituationalMusic"(): $Music
public "getMinecraftSessionService"(): $MinecraftSessionService
public "getSkinManager"(): $SkinManager
public "setCameraEntity"(arg0: $Entity$$Type): void
public "shouldEntityAppearGlowing"(arg0: $Entity$$Type): boolean
public "handler$ejn000$irons_spellbooks$changeGlowOutline"(arg0: $Entity$$Type, arg1: $CallbackInfoReturnable$$Type): void
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "getFixerUpper"(): $DataFixer
public "getBlockColors"(): $BlockColors
public "showOnlyReducedInfo"(): boolean
public "getTutorial"(): $Tutorial
public "isWindowActive"(): boolean
public "getHotbarManager"(): $HotbarManager
public "getPaintingTextures"(): $PaintingTextureManager
public "getMobEffectTextures"(): $MobEffectTextureManager
public "getMapDecorationTextures"(): $MapDecorationTextureManager
public "grabPanoramixScreenshot"(arg0: $File$$Type, arg1: integer, arg2: integer): $Component
public "getProgressListener"(): $StoringChunkProgressListener
public "getSplashManager"(): $SplashManager
public "getOverlay"(): $Overlay
public "getPlayerSocialManager"(): $PlayerSocialManager
public "updateMaxMipLevel"(arg0: integer): void
public "getItemColors"(): $ItemColors
public "getEntityModels"(): $EntityModelSet
public "isTextFilteringEnabled"(): boolean
public "prepareForMultiplayer"(): void
public "getProfileKeySignatureValidator"(): $SignatureValidator
public "canValidateProfileKeys"(): boolean
public "getLastInputType"(): $InputType
public "getNarrator"(): $GameNarrator
public "getChatListener"(): $ChatListener
public "getReportingContext"(): $ReportingContext
public "getTitle"(): StringJS
public "getScheduledEvents"(): $ScheduledEvents
public "getFontManager"(): $FontManager
public "openChatScreenFancyMenu"(arg0: StringJS): void
public "getReloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
public "create$setMissTime"(arg0: integer): void
public "embeddium$getGameThread"(): $Thread
public "getLocale"(): $Locale
public "pushGuiLayer"(arg0: $Screen$$Type): void
public "popGuiLayer"(): void
public "self"(): $Minecraft
public "tell"(message: $Component$$Type): void
public "setStatusMessage"(message: $Component$$Type): void
public "runCommand"(command: StringJS): void
public "runCommandSilent"(command: StringJS): void
public "setActivePostShader"(id: $ResourceLocation$$Type): void
public "isKeyDown"(keyName: StringJS): boolean
public "isKeyDown"(key: integer): boolean
public "getName"(): $Component
public "getCurrentScreen"(): $Screen
public "setCurrentScreen"(gui: $Screen$$Type): void
public "setTitle"(t: StringJS): void
public "getCurrentWorldName"(): StringJS
public "isKeyBindDown"(id: StringJS): boolean
public "getKeyBindPressedTicks"(id: StringJS): integer
public "isKeyMappingDown"(key: $KeyMapping$$Type): boolean
public "isShiftDown"(): boolean
public "isCtrlDown"(): boolean
public "isAltDown"(): boolean
public "getBlockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "getParticleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
public "schedule"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeating"(timer: $TemporalAmount$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "scheduleRepeatingInTicks"(ticks: $TickDuration$$Type, callback: $ScheduledEvents$Callback$$Type): $ScheduledEvents$ScheduledEvent
public "getDisplayName"(): $Component
public static "of"<Msg>(arg0: StringJS, arg1: $Consumer$$Type<(Msg)>): $ProcessorHandle<(Msg)>
get "connection"(): $ClientPacketListener
public static get "instance"(): $Minecraft
get "running"(): boolean
get "profiler"(): $ProfilerFiller
get "currentServer"(): $ServerData
get "proxy"(): $Proxy
get "resourceManager"(): $ResourceManager
get "textureManager"(): $TextureManager
get "window"(): $Window
set "overlay"(value: $Overlay$$Type)
get "vanillaPackResources"(): $VanillaPackResources
get "guiSprites"(): $GuiSpriteManager
get "itemRenderer"(): $ItemRenderer
get "timer"(): $DeltaTracker
get "localServer"(): boolean
set "windowActive"(value: boolean)
get "blockRenderer"(): $BlockRenderDispatcher
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "gameLoadFinished"(): boolean
get "toasts"(): $ToastComponent
get "debugOverlay"(): $DebugScreenOverlay
get "mainRenderTarget"(): $RenderTarget
get "launchedVersion"(): StringJS
get "versionType"(): StringJS
get "enforceUnicode"(): boolean
get "modelManager"(): $ModelManager
get "levelSource"(): $LevelStorageSource
get "chatStatus"(): $Minecraft$ChatStatus
set "lastInputType"(value: $InputType$$Type)
get "frameTimeNs"(): long
get "singleplayerServer"(): $IntegratedServer
get "musicManager"(): $MusicManager
get "telemetryManager"(): $ClientTelemetryManager
get "gpuUtilization"(): double
get "profileKeyPairManager"(): $ProfileKeyPairManager
get "user"(): $User
get "nameBanned"(): boolean
get "demo"(): boolean
public static get "launcherBrand"(): StringJS
get "gpuWarnlistManager"(): $GpuWarnlistManager
get "singleplayer"(): boolean
get "gameProfile"(): $GameProfile
get "resourcePackRepository"(): $PackRepository
get "downloadedPackSource"(): $DownloadedPackSource
get "resourcePackDirectory"(): $Path
get "languageManager"(): $LanguageManager
get "paused"(): boolean
get "soundManager"(): $SoundManager
get "situationalMusic"(): $Music
get "minecraftSessionService"(): $MinecraftSessionService
get "skinManager"(): $SkinManager
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
get "fixerUpper"(): $DataFixer
get "blockColors"(): $BlockColors
get "tutorial"(): $Tutorial
get "windowActive"(): boolean
get "hotbarManager"(): $HotbarManager
get "paintingTextures"(): $PaintingTextureManager
get "mobEffectTextures"(): $MobEffectTextureManager
get "mapDecorationTextures"(): $MapDecorationTextureManager
get "progressListener"(): $StoringChunkProgressListener
get "splashManager"(): $SplashManager
get "overlay"(): $Overlay
get "playerSocialManager"(): $PlayerSocialManager
get "itemColors"(): $ItemColors
get "entityModels"(): $EntityModelSet
get "textFilteringEnabled"(): boolean
get "profileKeySignatureValidator"(): $SignatureValidator
get "lastInputType"(): $InputType
get "narrator"(): $GameNarrator
get "chatListener"(): $ChatListener
get "reportingContext"(): $ReportingContext
get "title"(): StringJS
get "scheduledEvents"(): $ScheduledEvents
get "reloadStateTrackerFancyMenu"(): $ResourceLoadStateTracker
get "locale"(): $Locale
set "statusMessage"(value: $Component$$Type)
set "activePostShader"(value: $ResourceLocation$$Type)
get "name"(): $Component
get "currentScreen"(): $Screen
set "currentScreen"(value: $Screen$$Type)
set "title"(value: StringJS)
get "currentWorldName"(): StringJS
get "shiftDown"(): boolean
get "ctrlDown"(): boolean
get "altDown"(): boolean
get "blockTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
get "particleTextureAtlas"(): $Function<($ResourceLocation), ($TextureAtlasSprite)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$$Type = ($Minecraft);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$$Original = $Minecraft;}
declare module "net.minecraft.client.KeyboardHandler" {
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"

export class $KeyboardHandler {
static readonly "DEBUG_CRASH_TIME": integer

constructor(arg0: $Minecraft$$Type)

public "tick"(): void
public "setup"(arg0: long): void
public "getClipboard"(): StringJS
public "handler$fbm000$betterf3$processF3Messages"(key: integer, cir: $CallbackInfoReturnable$$Type): void
public "setClipboard"(arg0: StringJS): void
public "keyPress"(arg0: long, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
public "handler$fbm000$betterf3$processF3"(key: integer, cir: $CallbackInfoReturnable$$Type): void
set "up"(value: long)
get "clipboard"(): StringJS
set "clipboard"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyboardHandler$$Type = ($KeyboardHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyboardHandler$$Original = $KeyboardHandler;}
declare module "net.minecraft.client.DebugQueryHandler" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ClientPacketListener$$Type} from "net.minecraft.client.multiplayer.ClientPacketListener"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DebugQueryHandler {
constructor(arg0: $ClientPacketListener$$Type)

public "handleResponse"(arg0: integer, arg1: $CompoundTag$$Type): boolean
public "queryBlockEntityTag"(arg0: $BlockPos$$Type, arg1: $Consumer$$Type<($CompoundTag)>): void
public "queryEntityTag"(arg0: integer, arg1: $Consumer$$Type<($CompoundTag)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugQueryHandler$$Type = ($DebugQueryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugQueryHandler$$Original = $DebugQueryHandler;}
declare module "net.minecraft.client.Minecraft$ChatStatus" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Minecraft$ChatStatus extends $Enum<($Minecraft$ChatStatus)> {
static readonly "DISABLED_BY_OPTIONS": $Minecraft$ChatStatus
static readonly "DISABLED_BY_PROFILE": $Minecraft$ChatStatus
static readonly "ENABLED": $Minecraft$ChatStatus
static readonly "DISABLED_BY_LAUNCHER": $Minecraft$ChatStatus

public static "values"(): ($Minecraft$ChatStatus)[]
public static "valueOf"(arg0: StringJS): $Minecraft$ChatStatus
public "getMessage"(): $Component
public "isChatAllowed"(arg0: boolean): boolean
get "message"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$ChatStatus$$Type = (("enabled") | ("disabled_by_options") | ("disabled_by_launcher") | ("disabled_by_profile"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$ChatStatus$$Original = $Minecraft$ChatStatus;}
declare module "net.minecraft.client.HotbarManager" {
import {$Hotbar} from "net.minecraft.client.player.inventory.Hotbar"
import {$Path$$Type} from "java.nio.file.Path"
import {$DataFixer$$Type} from "com.mojang.datafixers.DataFixer"

export class $HotbarManager {
static readonly "NUM_HOTBAR_GROUPS": integer

constructor(arg0: $Path$$Type, arg1: $DataFixer$$Type)

public "get"(arg0: integer): $Hotbar
public "save"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HotbarManager$$Type = ($HotbarManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HotbarManager$$Original = $HotbarManager;}
declare module "net.minecraft.client.User$Type" {
import {$Enum} from "java.lang.Enum"

export class $User$Type extends $Enum<($User$Type)> {
static readonly "MOJANG": $User$Type
static readonly "LEGACY": $User$Type
static readonly "MSA": $User$Type

public "getName"(): StringJS
public static "values"(): ($User$Type)[]
public static "valueOf"(arg0: StringJS): $User$Type
public static "byName"(arg0: StringJS): $User$Type
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $User$Type$$Type = (("legacy") | ("mojang") | ("msa"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $User$Type$$Original = $User$Type;}
declare module "net.minecraft.client.PrioritizeChunkUpdates" {
import {$Enum} from "java.lang.Enum"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $PrioritizeChunkUpdates extends $Enum<($PrioritizeChunkUpdates)> implements $OptionEnum$$Interface {
static readonly "NEARBY": $PrioritizeChunkUpdates
static readonly "NONE": $PrioritizeChunkUpdates
static readonly "PLAYER_AFFECTED": $PrioritizeChunkUpdates

public static "values"(): ($PrioritizeChunkUpdates)[]
public static "valueOf"(arg0: StringJS): $PrioritizeChunkUpdates
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $PrioritizeChunkUpdates
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrioritizeChunkUpdates$$Type = (("none") | ("player_affected") | ("nearby"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PrioritizeChunkUpdates$$Original = $PrioritizeChunkUpdates;}
declare module "net.minecraft.client.GraphicsStatus" {
import {$Enum} from "java.lang.Enum"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $GraphicsStatus extends $Enum<($GraphicsStatus)> implements $OptionEnum$$Interface {
static readonly "FANCY": $GraphicsStatus
static readonly "FABULOUS": $GraphicsStatus
static readonly "FAST": $GraphicsStatus

public "toString"(): StringJS
public static "values"(): ($GraphicsStatus)[]
public static "valueOf"(arg0: StringJS): $GraphicsStatus
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $GraphicsStatus
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GraphicsStatus$$Type = (("fast") | ("fancy") | ("fabulous"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GraphicsStatus$$Original = $GraphicsStatus;}
declare module "net.minecraft.client.OptionInstance" {
import {$OptionInstance$TooltipSupplier, $OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$OptionInstance$CaptionBasedToString, $OptionInstance$CaptionBasedToString$$Type} from "net.minecraft.client.OptionInstance$CaptionBasedToString"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance$ValueSet, $OptionInstance$ValueSet$$Type} from "net.minecraft.client.OptionInstance$ValueSet"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$OptionEnum} from "net.minecraft.util.OptionEnum"
import {$OptionInstanceAccessor$$Interface} from "dev.isxander.yacl3.mixin.OptionInstanceAccessor"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$OptionInstance$Enum} from "net.minecraft.client.OptionInstance$Enum"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $OptionInstance<T> implements $OptionInstanceAccessor$$Interface {
readonly "caption": $Component
static readonly "BOOLEAN_VALUES": $OptionInstance$Enum<(boolean)>
static readonly "BOOLEAN_TO_STRING": $OptionInstance$CaptionBasedToString<(boolean)>

constructor(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(T)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(T)>, arg3: $OptionInstance$ValueSet$$Type<(T)>, arg4: $Codec$$Type<(T)>, arg5: T, arg6: $Consumer$$Type<(T)>)
constructor(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(T)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(T)>, arg3: $OptionInstance$ValueSet$$Type<(T)>, arg4: T, arg5: $Consumer$$Type<(T)>)

public "get"(): T
public "toString"(): StringJS
public "values"(): $OptionInstance$ValueSet<(T)>
public "set"(arg0: T): void
public "codec"(): $Codec<(T)>
public static "createBoolean"(arg0: StringJS, arg1: boolean, arg2: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean, arg3: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: boolean): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: $OptionInstance$TooltipSupplier$$Type<(boolean)>, arg2: $OptionInstance$CaptionBasedToString$$Type<(boolean)>, arg3: boolean, arg4: $Consumer$$Type<(boolean)>): $OptionInstance<(boolean)>
public static "createBoolean"(arg0: StringJS, arg1: boolean): $OptionInstance<(boolean)>
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer): $AbstractWidget
public "createButton"(arg0: $Options$$Type): $AbstractWidget
public "createButton"(arg0: $Options$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: $Consumer$$Type<(T)>): $AbstractWidget
public "getInitialValue"(): any
public static "noTooltip"<T>(): $OptionInstance$TooltipSupplier<(T)>
public static "cachedConstantTooltip"<T>(arg0: $Component$$Type): $OptionInstance$TooltipSupplier<(T)>
public static "forOptionEnum"<T extends $OptionEnum>(): $OptionInstance$CaptionBasedToString<(T)>
get "initialValue"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$$Type<T> = ($OptionInstance<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$$Original<T> = $OptionInstance<(T)>;}
declare module "net.minecraft.client.StringSplitter$LinePosConsumer" {
import {$Style, $Style$$Type} from "net.minecraft.network.chat.Style"

export interface $StringSplitter$LinePosConsumer$$Interface {

(arg0: $Style, arg1: integer, arg2: integer): void
}

export class $StringSplitter$LinePosConsumer implements $StringSplitter$LinePosConsumer$$Interface {
 "accept"(arg0: $Style$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StringSplitter$LinePosConsumer$$Type = ((arg0: $Style, arg1: integer, arg2: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StringSplitter$LinePosConsumer$$Original = $StringSplitter$LinePosConsumer;}
declare module "net.minecraft.client.InputType" {
import {$Enum} from "java.lang.Enum"

export class $InputType extends $Enum<($InputType)> {
static readonly "MOUSE": $InputType
static readonly "KEYBOARD_TAB": $InputType
static readonly "NONE": $InputType
static readonly "KEYBOARD_ARROW": $InputType

public static "values"(): ($InputType)[]
public static "valueOf"(arg0: StringJS): $InputType
public "isMouse"(): boolean
public "isKeyboard"(): boolean
get "mouse"(): boolean
get "keyboard"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputType$$Type = (("none") | ("mouse") | ("keyboard_arrow") | ("keyboard_tab"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InputType$$Original = $InputType;}
declare module "net.minecraft.client.User" {
import {$User$Type, $User$Type$$Type} from "net.minecraft.client.User$Type"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$UUID, $UUID$$Type} from "java.util.UUID"

export class $User {
constructor(arg0: StringJS, arg1: $UUID$$Type, arg2: StringJS, arg3: (StringJS)?, arg4: (StringJS)?, arg5: $User$Type$$Type)

public "getName"(): StringJS
public "getType"(): $User$Type
public "getSessionId"(): StringJS
public "getClientId"(): $Optional<(StringJS)>
public "getXuid"(): $Optional<(StringJS)>
public "getAccessToken"(): StringJS
public "getProfileId"(): $UUID
get "name"(): StringJS
get "type"(): $User$Type
get "sessionId"(): StringJS
get "clientId"(): $Optional<(StringJS)>
get "xuid"(): $Optional<(StringJS)>
get "accessToken"(): StringJS
get "profileId"(): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $User$$Type = ($User);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $User$$Original = $User;}
declare module "net.minecraft.client.GuiMessageTag" {
import {$GuiMessageTag$Icon, $GuiMessageTag$Icon$$Type} from "net.minecraft.client.GuiMessageTag$Icon"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $GuiMessageTag extends $Record {
constructor(arg0: integer, arg1: $GuiMessageTag$Icon$$Type, arg2: $Component$$Type, arg3: StringJS)

public static "chatNotSecure"(): $GuiMessageTag
public static "chatModified"(arg0: StringJS): $GuiMessageTag
public static "chatError"(): $GuiMessageTag
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "system"(): $GuiMessageTag
public "text"(): $Component
public "icon"(): $GuiMessageTag$Icon
public "indicatorColor"(): integer
public static "systemSinglePlayer"(): $GuiMessageTag
public "logTag"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessageTag$$Type = ({"logTag"?: StringJS, "icon"?: $GuiMessageTag$Icon$$Type, "indicatorColor"?: integer, "text"?: $Component$$Type}) | ([logTag?: StringJS, icon?: $GuiMessageTag$Icon$$Type, indicatorColor?: integer, text?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessageTag$$Original = $GuiMessageTag;}
declare module "net.minecraft.client.ResourceLoadStateTracker$ReloadReason" {
import {$Enum} from "java.lang.Enum"

export class $ResourceLoadStateTracker$ReloadReason extends $Enum<($ResourceLoadStateTracker$ReloadReason)> {
static readonly "INITIAL": $ResourceLoadStateTracker$ReloadReason
static readonly "MANUAL": $ResourceLoadStateTracker$ReloadReason
static readonly "UNKNOWN": $ResourceLoadStateTracker$ReloadReason

public static "values"(): ($ResourceLoadStateTracker$ReloadReason)[]
public static "valueOf"(arg0: StringJS): $ResourceLoadStateTracker$ReloadReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLoadStateTracker$ReloadReason$$Type = (("initial") | ("manual") | ("unknown"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceLoadStateTracker$ReloadReason$$Original = $ResourceLoadStateTracker$ReloadReason;}
declare module "net.minecraft.client.GuiMessage" {
import {$MessageSignature, $MessageSignature$$Type} from "net.minecraft.network.chat.MessageSignature"
import {$GuiMessageTag$Icon} from "net.minecraft.client.GuiMessageTag$Icon"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$GuiMessageTag, $GuiMessageTag$$Type} from "net.minecraft.client.GuiMessageTag"
import {$Record} from "java.lang.Record"

export class $GuiMessage extends $Record {
constructor(arg0: integer, arg1: $Component$$Type, arg2: $MessageSignature$$Type, arg3: $GuiMessageTag$$Type)

public "content"(): $Component
public "tag"(): $GuiMessageTag
public "signature"(): $MessageSignature
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "icon"(): $GuiMessageTag$Icon
public "addedTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiMessage$$Type = ({"signature"?: $MessageSignature$$Type, "content"?: $Component$$Type, "tag"?: $GuiMessageTag$$Type, "addedTime"?: integer}) | ([signature?: $MessageSignature$$Type, content?: $Component$$Type, tag?: $GuiMessageTag$$Type, addedTime?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiMessage$$Original = $GuiMessage;}
declare module "net.minecraft.client.OptionInstance$TooltipSupplier" {
import {$Tooltip, $Tooltip$$Type} from "net.minecraft.client.gui.components.Tooltip"

export interface $OptionInstance$TooltipSupplier$$Interface<T> {

(arg0: T): $Tooltip$$Type
}

export class $OptionInstance$TooltipSupplier<T> implements $OptionInstance$TooltipSupplier$$Interface {
 "apply"(arg0: T): $Tooltip
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$TooltipSupplier$$Type<T> = ((arg0: T) => $Tooltip$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$TooltipSupplier$$Original<T> = $OptionInstance$TooltipSupplier<(T)>;}
declare module "net.minecraft.client.MouseHandler" {
import {$MouseAccessor$$Interface} from "eu.midnightdust.midnightcontrols.client.mixin.MouseAccessor"
import {$MouseHandlerAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.MouseHandlerAccessor"
import {$IMixinMouseHandler$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinMouseHandler"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $MouseHandler implements $IMixinMouseHandler$$Interface, $MouseAccessor$$Interface, $MouseHandlerAccessor$$Interface {
 "mouseGrabbed": boolean

constructor(arg0: $Minecraft$$Type)

public "setup"(arg0: long): void
public "xpos"(): double
public "ypos"(): double
public "releaseMouse"(): void
public "grabMouse"(): void
public "handleAccumulatedMovement"(): void
public "setIgnoreFirstMove"(): void
public "cursorEntered"(): void
public "isMouseGrabbed"(): boolean
public "isRightPressed"(): boolean
public "getXVelocity"(): double
public "getYVelocity"(): double
public "getActiveButtonKonkrete"(): integer
public "midnightcontrols$onCursorPos"(arg0: long, arg1: double, arg2: double): void
public "midnightcontrols$onMouseButton"(arg0: long, arg1: integer, arg2: integer, arg3: integer): void
public "create$setXPos"(arg0: double): void
public "create$setYPos"(arg0: double): void
public "isLeftPressed"(): boolean
public "isMiddlePressed"(): boolean
set "up"(value: long)
get "ignoreFirstMove"(): void
get "rightPressed"(): boolean
get "XVelocity"(): double
get "YVelocity"(): double
get "activeButtonKonkrete"(): integer
get "leftPressed"(): boolean
get "middlePressed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandler$$Type = ($MouseHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseHandler$$Original = $MouseHandler;}
declare module "net.minecraft.client.ClientRecipeBook" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List} from "java.util.List"
import {$RecipeCollection} from "net.minecraft.client.gui.screens.recipebook.RecipeCollection"
import {$RecipeBook} from "net.minecraft.stats.RecipeBook"
import {$RecipeBookCategories$$Type} from "net.minecraft.client.RecipeBookCategories"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export class $ClientRecipeBook extends $RecipeBook {
constructor()

public "setupCollections"(arg0: $Iterable$$Type<($RecipeHolder$$Type<(never)>)>, arg1: $RegistryAccess$$Type): void
public "getCollections"(): $List<($RecipeCollection)>
public "getCollection"(arg0: $RecipeBookCategories$$Type): $List<($RecipeCollection)>
get "collections"(): $List<($RecipeCollection)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRecipeBook$$Type = ($ClientRecipeBook);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientRecipeBook$$Original = $ClientRecipeBook;}
declare module "net.minecraft.client.ParticleStatus" {
import {$Enum} from "java.lang.Enum"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $ParticleStatus extends $Enum<($ParticleStatus)> implements $OptionEnum$$Interface {
static readonly "ALL": $ParticleStatus
static readonly "DECREASED": $ParticleStatus
static readonly "MINIMAL": $ParticleStatus

public static "values"(): ($ParticleStatus)[]
public static "valueOf"(arg0: StringJS): $ParticleStatus
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $ParticleStatus
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleStatus$$Type = (("all") | ("decreased") | ("minimal"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleStatus$$Original = $ParticleStatus;}
declare module "net.minecraft.client.Options$FieldAccess" {
import {$Options$OptionAccess$$Interface} from "net.minecraft.client.Options$OptionAccess"
import {$Function$$Type} from "java.util.function.Function"

export interface $Options$FieldAccess$$Interface extends $Options$OptionAccess$$Interface {
}

export class $Options$FieldAccess implements $Options$FieldAccess$$Interface {
 "process"<T>(arg0: StringJS, arg1: T, arg2: $Function$$Type<(StringJS), (T)>, arg3: $Function$$Type<(T), (StringJS)>): T
 "process"(arg0: StringJS, arg1: float): float
 "process"(arg0: StringJS, arg1: StringJS): StringJS
 "process"(arg0: StringJS, arg1: boolean): boolean
 "process"(arg0: StringJS, arg1: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Options$FieldAccess$$Type = ($Options$FieldAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Options$FieldAccess$$Original = $Options$FieldAccess;}
declare module "net.minecraft.client.Camera" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$Vector3f} from "org.joml.Vector3f"
import {$Camera$NearPlane} from "net.minecraft.client.Camera$NearPlane"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$FogType} from "net.minecraft.world.level.material.FogType"
import {$CameraAccessor$$Interface} from "dev.kosmx.playerAnim.mixin.firstPerson.CameraAccessor"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $Camera implements $CameraAccessor$$Interface {
static readonly "FOG_DISTANCE_SCALE": float

constructor()

/**
 * 
 * @deprecated
 */
public "setRotation"(arg0: float, arg1: float): void
public "handler$bdc000$supplementaries$supp$setupCannonCamera"(level: $BlockGetter$$Type, entity: $Entity$$Type, detached: boolean, thirdPersonReverse: boolean, partialTick: float, ci: $CallbackInfo$$Type): void
public "getMaxZoom"(arg0: float): float
public "handler$zbl000$immersive_aircraft$ia$setup"(area: $BlockGetter$$Type, entity: $Entity$$Type, thirdPerson: boolean, inverseView: boolean, tickDelta: float, ci: $CallbackInfo$$Type): void
public "getLookVector"(): $Vector3f
public "getLeftVector"(): $Vector3f
public "getBlockAtCamera"(): $BlockState
public "move"(arg0: float, arg1: float, arg2: float): void
public "getPosition"(): $Vec3
public "tick"(): void
public "getEntity"(): $Entity
public "reset"(): void
public "setup"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type, arg2: boolean, arg3: boolean, arg4: float): void
public "isInitialized"(): boolean
public "getXRot"(): float
public "getYRot"(): float
public "rotation"(): $Quaternionf
public "getFluidInCamera"(): $FogType
public "setDetached"(arg0: boolean): void
public "getPartialTickTime"(): float
public "isDetached"(): boolean
public "getRoll"(): float
public "getBlockPosition"(): $BlockPos
public "getUpVector"(): $Vector3f
public "setPosition"(arg0: $Vec3$$Type): void
public "getNearPlane"(): $Camera$NearPlane
get "lookVector"(): $Vector3f
get "leftVector"(): $Vector3f
get "blockAtCamera"(): $BlockState
get "position"(): $Vec3
get "entity"(): $Entity
get "initialized"(): boolean
get "XRot"(): float
get "YRot"(): float
get "fluidInCamera"(): $FogType
set "detached"(value: boolean)
get "partialTickTime"(): float
get "detached"(): boolean
get "roll"(): float
get "blockPosition"(): $BlockPos
get "upVector"(): $Vector3f
set "position"(value: $Vec3$$Type)
get "nearPlane"(): $Camera$NearPlane
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Camera$$Type = ($Camera);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Camera$$Original = $Camera;}
declare module "net.minecraft.client.Camera$NearPlane" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"

export class $Camera$NearPlane {
public "getTopLeft"(): $Vec3
public "getTopRight"(): $Vec3
public "getBottomLeft"(): $Vec3
public "getBottomRight"(): $Vec3
public "getPointOnPlane"(arg0: float, arg1: float): $Vec3
get "topLeft"(): $Vec3
get "topRight"(): $Vec3
get "bottomLeft"(): $Vec3
get "bottomRight"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Camera$NearPlane$$Type = ($Camera$NearPlane);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Camera$NearPlane$$Original = $Camera$NearPlane;}
declare module "net.minecraft.client.DeltaTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DeltaTracker$$Interface {
get "gameTimeDeltaTicks"(): float
get "realtimeDeltaTicks"(): float
}

export class $DeltaTracker implements $DeltaTracker$$Interface {
static readonly "ZERO": $DeltaTracker
static readonly "ONE": $DeltaTracker

 "getGameTimeDeltaPartialTick"(arg0: boolean): float
 "getGameTimeDeltaTicks"(): float
 "getRealtimeDeltaTicks"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeltaTracker$$Type = ($DeltaTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeltaTracker$$Original = $DeltaTracker;}
declare module "net.minecraft.client.OptionInstance$CaptionBasedToString" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $OptionInstance$CaptionBasedToString$$Interface<T> {

(arg0: $Component, arg1: T): $Component$$Type
}

export class $OptionInstance$CaptionBasedToString<T> implements $OptionInstance$CaptionBasedToString$$Interface {
 "toString"(arg0: $Component$$Type, arg1: T): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$CaptionBasedToString$$Type<T> = ((arg0: $Component, arg1: T) => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$CaptionBasedToString$$Original<T> = $OptionInstance$CaptionBasedToString<(T)>;}
declare module "net.minecraft.client.AttackIndicatorStatus" {
import {$Enum} from "java.lang.Enum"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $AttackIndicatorStatus extends $Enum<($AttackIndicatorStatus)> implements $OptionEnum$$Interface {
static readonly "CROSSHAIR": $AttackIndicatorStatus
static readonly "HOTBAR": $AttackIndicatorStatus
static readonly "OFF": $AttackIndicatorStatus

public static "values"(): ($AttackIndicatorStatus)[]
public static "valueOf"(arg0: StringJS): $AttackIndicatorStatus
public "getKey"(): StringJS
public "getId"(): integer
public static "byId"(arg0: integer): $AttackIndicatorStatus
public "getCaption"(): $Component
get "key"(): StringJS
get "id"(): integer
get "caption"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackIndicatorStatus$$Type = (("off") | ("crosshair") | ("hotbar"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttackIndicatorStatus$$Original = $AttackIndicatorStatus;}
declare module "net.minecraft.client.ResourceLoadStateTracker" {
import {$ResourceLoadStateTracker$ReloadReason$$Type} from "net.minecraft.client.ResourceLoadStateTracker$ReloadReason"
import {$List$$Type} from "java.util.List"
import {$CrashReport$$Type} from "net.minecraft.CrashReport"
import {$PackResources$$Type} from "net.minecraft.server.packs.PackResources"
import {$Throwable$$Type} from "java.lang.Throwable"

export class $ResourceLoadStateTracker {
constructor()

public "startReload"(arg0: $ResourceLoadStateTracker$ReloadReason$$Type, arg1: $List$$Type<($PackResources$$Type)>): void
public "startRecovery"(arg0: $Throwable$$Type): void
public "fillCrashReport"(arg0: $CrashReport$$Type): void
public "finishReload"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLoadStateTracker$$Type = ($ResourceLoadStateTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourceLoadStateTracker$$Original = $ResourceLoadStateTracker;}
declare module "net.minecraft.client.GameNarrator" {
import {$NarratorStatus$$Type} from "net.minecraft.client.NarratorStatus"
import {$Narrator} from "com.mojang.text2speech.Narrator"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $GameNarrator {
readonly "narrator": $Narrator
static readonly "NO_TITLE": $Component

constructor(arg0: $Minecraft$$Type)

public "sayChat"(arg0: $Component$$Type): void
public "clear"(): void
public "destroy"(): void
public "isActive"(): boolean
public "checkStatus"(arg0: boolean): void
public "sayNow"(arg0: StringJS): void
public "sayNow"(arg0: $Component$$Type): void
public "updateNarratorStatus"(arg0: $NarratorStatus$$Type): void
public "say"(arg0: $Component$$Type): void
get "active"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameNarrator$$Type = ($GameNarrator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameNarrator$$Original = $GameNarrator;}
declare module "net.minecraft.client.Minecraft$GameLoadCookie" {
import {$RealmsClient, $RealmsClient$$Type} from "com.mojang.realmsclient.client.RealmsClient"
import {$GameConfig$QuickPlayData, $GameConfig$QuickPlayData$$Type} from "net.minecraft.client.main.GameConfig$QuickPlayData"
import {$Record} from "java.lang.Record"

export class $Minecraft$GameLoadCookie extends $Record {
constructor(realmsClient: $RealmsClient$$Type, quickPlayData: $GameConfig$QuickPlayData$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "quickPlayData"(): $GameConfig$QuickPlayData
public "realmsClient"(): $RealmsClient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Minecraft$GameLoadCookie$$Type = ({"realmsClient"?: $RealmsClient$$Type, "quickPlayData"?: $GameConfig$QuickPlayData$$Type}) | ([realmsClient?: $RealmsClient$$Type, quickPlayData?: $GameConfig$QuickPlayData$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Minecraft$GameLoadCookie$$Original = $Minecraft$GameLoadCookie;}
declare module "net.minecraft.client.KeyMapping" {
import {$Map} from "java.util.Map"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$IKeyConflictContext, $IKeyConflictContext$$Type} from "net.neoforged.neoforge.client.settings.IKeyConflictContext"
import {$KeyBindingAccessor$$Interface} from "eu.midnightdust.midnightcontrols.client.util.KeyBindingAccessor"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IMixinKeyBinding$$Interface} from "org.anti_ad.mc.ipnext.mixin.IMixinKeyBinding"
import {$AccessKeyMapping$$Interface} from "com.blamejared.controlling.mixin.AccessKeyMapping"
import {$KeyModifier, $KeyModifier$$Type} from "net.neoforged.neoforge.client.settings.KeyModifier"
import {$Supplier} from "java.util.function.Supplier"
import {$AccessorKeyMapping$$Interface as $AccessorKeyMapping$0$$Interface} from "vazkii.patchouli.mixin.client.AccessorKeyMapping"
import {$KeyMappingAccessorMixin$$Interface} from "immersive_aircraft.mixin.client.KeyMappingAccessorMixin"
import {$AccessorKeyMapping$$Interface} from "com.railwayteam.railways.mixin.conductor_possession.AccessorKeyMapping"
import {$InputConstants$Key, $InputConstants$Key$$Type} from "com.mojang.blaze3d.platform.InputConstants$Key"
import {$KeyBindingIDAccessor$$Interface} from "eu.midnightdust.midnightcontrols.client.mixin.KeyBindingIDAccessor"
import {$InputConstants$Type$$Type} from "com.mojang.blaze3d.platform.InputConstants$Type"
import {$IKeyMappingExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IKeyMappingExtension"

export class $KeyMapping implements $Comparable$$Interface<($KeyMapping)>, $IKeyMappingExtension$$Interface, $KeyMappingAccessorMixin$$Interface, $AccessKeyMapping$$Interface, $AccessorKeyMapping$$Interface, $AccessorKeyMapping$0$$Interface, $IMixinKeyBinding$$Interface, $KeyBindingAccessor$$Interface, $KeyBindingIDAccessor$$Interface {
static readonly "ALL": $Map<(StringJS), ($KeyMapping)>
static readonly "CATEGORY_INTERFACE": StringJS
static readonly "CATEGORY_MULTIPLAYER": StringJS
static readonly "CATEGORY_CREATIVE": StringJS
static readonly "CATEGORY_MOVEMENT": StringJS
static readonly "CATEGORY_GAMEPLAY": StringJS
static readonly "CATEGORY_MISC": StringJS
 "key": $InputConstants$Key
static readonly "CATEGORY_INVENTORY": StringJS

constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Type$$Type, arg3: integer, arg4: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $InputConstants$Key$$Type, arg3: StringJS)
constructor(arg0: StringJS, arg1: $InputConstants$Type$$Type, arg2: integer, arg3: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Key$$Type, arg4: StringJS)
constructor(arg0: StringJS, arg1: $IKeyConflictContext$$Type, arg2: $KeyModifier$$Type, arg3: $InputConstants$Type$$Type, arg4: integer, arg5: StringJS)
constructor(arg0: StringJS, arg1: integer, arg2: StringJS)

public "getDefaultKey"(): $InputConstants$Key
public static "click"(arg0: $InputConstants$Key$$Type): void
public "getName"(): StringJS
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $KeyMapping$$Type): integer
public "matches"(arg0: integer, arg1: integer): boolean
public "getKey"(): $InputConstants$Key
public static "set"(arg0: $InputConstants$Key$$Type, arg1: boolean): void
public "isDefault"(): boolean
public static "setAll"(): void
public "getCategory"(): StringJS
public "setKey"(arg0: $InputConstants$Key$$Type): void
public "same"(arg0: $KeyMapping$$Type): boolean
public static "createNameSupplier"(arg0: StringJS): $Supplier<($Component)>
public static "releaseAll"(): void
public "consumeClick"(): boolean
public "isDown"(): boolean
public "getTimesPressed"(): integer
public "setPressed"(arg0: boolean): void
public "setTimesPressed"(arg0: integer): void
public "isUnbound"(): boolean
public static "resetToggleKeys"(): void
public "matchesMouse"(arg0: integer): boolean
public "setDown"(arg0: boolean): void
public static "resetMapping"(): void
public "getTranslatedKeyMessage"(): $Component
public "getKeyConflictContext"(): $IKeyConflictContext
public "getKeyModifier"(): $KeyModifier
public "getDefaultKeyModifier"(): $KeyModifier
public "saveString"(): StringJS
public "setKeyConflictContext"(arg0: $IKeyConflictContext$$Type): void
public "setKeyModifierAndCode"(arg0: $KeyModifier$$Type, arg1: $InputConstants$Key$$Type): void
public "getClickCount"(): integer
public "setClickCount"(arg0: integer): void
public "midnightcontrols$press"(): boolean
public "midnightcontrols$unpress"(): boolean
public "controlling$getKey"(): $InputConstants$Key
public static "getAllKeyMappings$patchouli_$md$a93e73$3"(): $Map
public "getKeyCode"(): $InputConstants$Key
public "getPressed"(): boolean
public static "getALL$midnightcontrols_$md$a93e73$4"(): $Map
public "getDisplayName"(): $Component
public "setToDefault"(): void
public "isConflictContextAndModifierActive"(): boolean
public "isActiveAndMatches"(arg0: $InputConstants$Key$$Type): boolean
public "hasKeyModifierConflict"(arg0: $KeyMapping$$Type): boolean
public static "getAllKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
public "midnightcontrols$handlePressState"(pressed: boolean): boolean
public static "getALL"(): $Map<(StringJS), ($KeyMapping)>
get "defaultKey"(): $InputConstants$Key
get "name"(): StringJS
get "default"(): boolean
public static get "all"(): void
get "category"(): StringJS
get "down"(): boolean
get "timesPressed"(): integer
set "pressed"(value: boolean)
set "timesPressed"(value: integer)
get "unbound"(): boolean
set "down"(value: boolean)
get "translatedKeyMessage"(): $Component
get "keyConflictContext"(): $IKeyConflictContext
get "keyModifier"(): $KeyModifier
get "defaultKeyModifier"(): $KeyModifier
set "keyConflictContext"(value: $IKeyConflictContext$$Type)
get "clickCount"(): integer
set "clickCount"(value: integer)
public static get "allKeyMappings$patchouli_$md$a93e73$3"(): $Map
get "keyCode"(): $InputConstants$Key
get "pressed"(): boolean
public static get "ALL$midnightcontrols_$md$a93e73$4"(): $Map
get "displayName"(): $Component
get "toDefault"(): void
get "conflictContextAndModifierActive"(): boolean
public static get "allKeyMappings"(): $Map<(StringJS), ($KeyMapping)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyMapping$$Type = ($KeyMapping);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KeyMapping$$Original = $KeyMapping;}
declare module "net.minecraft.client.OptionInstance$ValueSet" {
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function} from "java.util.function.Function"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionInstance$ValueSet$$Interface<T> {
}

export class $OptionInstance$ValueSet<T> implements $OptionInstance$ValueSet$$Interface {
 "validateValue"(arg0: T): $Optional<(T)>
 "codec"(): $Codec<(T)>
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$ValueSet$$Type<T> = ($OptionInstance$ValueSet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$ValueSet$$Original<T> = $OptionInstance$ValueSet<(T)>;}
declare module "net.minecraft.client.OptionInstance$CycleableValueSet" {
import {$OptionInstance$TooltipSupplier$$Type} from "net.minecraft.client.OptionInstance$TooltipSupplier"
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function} from "java.util.function.Function"
import {$AbstractWidget} from "net.minecraft.client.gui.components.AbstractWidget"
import {$OptionInstance$ValueSet$$Interface} from "net.minecraft.client.OptionInstance$ValueSet"
import {$OptionInstance} from "net.minecraft.client.OptionInstance"
import {$Options$$Type} from "net.minecraft.client.Options"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionInstance$CycleableValueSet$$Interface<T> extends $OptionInstance$ValueSet$$Interface<(T)> {
}

export class $OptionInstance$CycleableValueSet<T> implements $OptionInstance$CycleableValueSet$$Interface {
 "validateValue"(arg0: T): $Optional<(T)>
 "codec"(): $Codec<(T)>
 "createButton"(arg0: $OptionInstance$TooltipSupplier$$Type<(T)>, arg1: $Options$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Consumer$$Type<(T)>): $Function<($OptionInstance<(T)>), ($AbstractWidget)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionInstance$CycleableValueSet$$Type<T> = ($OptionInstance$CycleableValueSet<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionInstance$CycleableValueSet$$Original<T> = $OptionInstance$CycleableValueSet<(T)>;}
declare module "net.minecraft.client.CloudStatus" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$OptionEnum$$Interface} from "net.minecraft.util.OptionEnum"
import {$Component} from "net.minecraft.network.chat.Component"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $CloudStatus extends $Enum<($CloudStatus)> implements $OptionEnum$$Interface, $StringRepresentable$$Interface {
static readonly "FANCY": $CloudStatus
static readonly "CODEC": $Codec<($CloudStatus)>
static readonly "FAST": $CloudStatus
static readonly "OFF": $CloudStatus

public static "values"(): ($CloudStatus)[]
public static "valueOf"(arg0: StringJS): $CloudStatus
public "getKey"(): StringJS
public "getId"(): integer
public "getSerializedName"(): StringJS
public "getCaption"(): $Component
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "key"(): StringJS
get "id"(): integer
get "serializedName"(): StringJS
get "caption"(): $Component
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CloudStatus$$Type = (("false") | ("fast") | ("true"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CloudStatus$$Original = $CloudStatus;}
