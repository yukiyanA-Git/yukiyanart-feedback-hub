// Flutter / Dart Data Model Blueprint

/// 対象アプリ定義
class AppItem {
  final String id;
  final String name;
  final String category;
  final String iconName;
  final String colorHex;

  AppItem({
    required this.id,
    required this.name,
    required this.category,
    required this.iconName,
    required this.colorHex,
  });

  factory AppItem.fromJson(Map<String, dynamic> json) {
    return AppItem(
      id: json['id'],
      name: json['name'],
      category: json['category'],
      iconName: json['iconName'],
      colorHex: json['colorHex'],
    );
  }
}

/// 要望・不具合報告データモデル
enum FeedbackCategory { bug, feature, other }

class FeedbackPost {
  final String id;
  final String appId;
  final FeedbackCategory category;
  final String title;
  final String content;
  final DateTime createdAt;
  final List<AdminReply> replies;

  FeedbackPost({
    required this.id,
    required this.appId,
    required this.category,
    required this.title,
    required this.content,
    required this.createdAt,
    this.replies = const [],
  });
}

/// 管理者返信データモデル
class AdminReply {
  final String id;
  final String author;
  final String text;
  final DateTime createdAt;

  AdminReply({
    required this.id,
    required this.author,
    required this.text,
    required this.createdAt,
  });
}

/// 公式お知らせ・アップデート履歴
enum NewsTag { update, fix, info }

class OfficialNews {
  final String id;
  final String appId; // 'all' 選択で全アプリ共通
  final NewsTag tag;
  final String title;
  final String content;
  final DateTime createdAt;

  OfficialNews({
    required this.id,
    required this.appId,
    required this.tag,
    required this.title,
    required this.content,
    required this.createdAt,
  });
}
