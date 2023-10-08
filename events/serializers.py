from rest_framework import serializers
from .models import Event
from taggit.serializers import (TagListSerializerField, TaggitSerializer)


class EventSerializer(TaggitSerializer, serializers.ModelSerializer):
    """
    Serializer for Events model
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    tags = TagListSerializerField()
    profile_image = serializers.ReadOnlyField(source='owner.profile.profile_picture.url')
    going = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    not_going = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    is_going = serializers.BooleanField(write_only=True, required=False)

    def update(self, instance, validated_data):
        is_going = validated_data.pop('is_going', None)
        if is_going is not None:
            user = self.context['request'].user
            if is_going:
                instance.going.add(user)
                instance.not_going.remove(user)
            else:
                instance.not_going.add(user)
                instance.going.remove(user)

        return super().update(instance, validated_data)

    def validate_image(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image size larger than 2MB!')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height larger than 4096px!'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width larger than 4096px!'
            )
        return value

    def get_is_owner(self, obj):
        """
        Return correct user
        """
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        """
        Fields to display
        """
        model = Event
        fields = [
            'id',
            'owner', 
            'is_owner', 
            'profile_id',
            'profile_image', 
            'created_at', 
            'updated_at',
            'title', 
            'description', 
            'event_date',
            'event_time', 
            'city', 
            'country',
            'tags', 
            'category', 
            'image',
            'going',
            'not_going',
            'is_going',
        ]